const express   = require("express");

if (process.argv[1] === __filename) {
  console.log("Starting up server");

  const app = express();
  app.use(express.static("site"));
  app.listen(80, function() {
    console.log("Listening on port 80");
  });
}
