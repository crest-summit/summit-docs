const AWS = require("aws-sdk");
const s3 = require("@faceleg/s3");
const readline = require("readline");

let bucketName = null;
if (process.argv.length == 3)
    bucketName = process.argv[2];
else if (process.env.S3_BUCKET_NAME != undefined)
    bucketName = process.env.S3_BUCKET_NAME;
if (bucketName == null || bucketName == '') {
    throw new Error("No S3 bucket specified. Provide as argument or S3_BUCKET_NAME environment variable");
}

const CLOUDFRONT_DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID;
if (CLOUDFRONT_DISTRIBUTION_ID == undefined || CLOUDFRONT_DISTRIBUTION_ID == '')
    throw new Error("CLOUDFRONT_DISTRIBUTION_ID was not defined");


console.log("-------------------------------");
console.log(`-- Syncing to bucket '${bucketName}'`);
console.log(`-- Invalidating CloudFront Distribution: ${CLOUDFRONT_DISTRIBUTION_ID}`);
console.log("-------------------------------");




(new Uploader(bucketName))
  .upload()
  .then(() => invalidateCloudfront())
  .catch((e) => console.error(e));




function Uploader(bucketName) {
    let numBarsDisplayed = 0;
    this.bucketName = bucketName;
    this.files = [];
    this.filesDeleted = [];
    this.totalBarsToUse = 40;
    
    this.upload = function() {
        return new Promise((accept, reject) => {
            const client = s3.createClient({ s3Client : new AWS.S3() });
            // https://github.com/andrewrk/node-s3-client/issues/152
            client.s3.addExpect100Continue = function() {};

            const params = {
                localDir : "site",
                deleteRemoved : true,
                s3Params : {
                    Bucket : this.bucketName
                }
            };
            const uploader = client.uploadDir(params);
            uploader.on('error', this.onError.bind(this));
            uploader.on('fileUploadStart', function(filePath, s3Key) {
                this.files.push({ localPath : filePath, s3Path: s3Key})
            }.bind(this));
            uploader.on('progress', function() {
                if (uploader.progressAmount === 0)
                    return;
                this.updateProgressBar(uploader.progressAmount / uploader.progressTotal * 100);
            }.bind(this));
            uploader.on('filesDeleted', function(files) {
                this.filesDeleted = [...this.filesDeleted, ...files];
            }.bind(this));

            uploader.on('end', function() {
                process.stdout.write("\n");
                console.log("Sync completed");
                if (this.files.length === 0)
                    console.log("- No files were uploaded");
                else {
                    this.files.forEach(function(file) {
                        console.log(`- ${file.localPath} -> s3://${this.bucketName}/${file.s3Path}`);
                    }.bind(this));
                }
                if (this.filesDeleted.length === 0) {
                    console.log("- No remote files were deleted");
                }
                else {
                  this.filesDeleted.forEach(function(file) {
                      console.log(`- Deleted s3://${this.bucketName}/${file}`)
                  }.bind(this));
                }

                accept();
            }.bind(this));

        });
    };

    this.onError = function(error) {
        console.error(`An error has occurred`, error.stack);
    };
    this.updateProgressBar = function(percentage) {
        let numBars = parseInt(percentage / (100 / this.totalBarsToUse));
        if (numBars === this.numBarsDisplayed)
            return;
        let numSpaces = this.totalBarsToUse - numBars;
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
        process.stdout.write("|")
        for (let i = 0; i < numBars; i++)
            process.stdout.write("=");
        process.stdout.write(">");
        for (let i = 0; i < numSpaces; i++)
            process.stdout.write(" ");
        process.stdout.write(`| ${percentage.toFixed(1)}%`);
        this.numBarsDisplayed = numBars;
    }
}


function invalidateCloudfront() {
    const callerReference = "request-" + (new Date()).getTime();
    const cloudfront = new AWS.CloudFront();
    const params = {
        DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
        InvalidationBatch: {
            CallerReference: callerReference,
            Paths: {
                Quantity: 2,
                Items: [
                    "/",
                    "/*"
                ]
            }
        }
    };

    console.log("Starting CloudFront invalidation request with parameters", JSON.stringify(params, null, 2));

    return new Promise((accept, reject) => {
        cloudfront.createInvalidation(params, function(err, data) {
            if (err) {
              console.error("Error trying to invalidate CloudFront distribution", err);
              reject(err);
            }

            console.log("CloudFront distribution invalidated", JSON.stringify(data, null, 2));
            accept();
        });
    });
}

function setFileToNoCache(filename, contentType) {
    console.log("setting cache control metadata for " + filename + " (" + contentType + ")");
    // In order to set the cache control, we have to update metadata
    // Updating metadata wipes the existing Content-Type value
    const params = {
        Bucket: bucketName,
        CopySource: `/${bucketName}/${filename}`,
        Key: filename,
        ContentType : contentType,
        CacheControl: "no-cache, no-store, must-revalidate",
        Expires: 0,
        MetadataDirective: "REPLACE"
    };

    const s3Client = new AWS.S3();
    return s3Client.copyObject(params).promise();
}
