const express   = require("express");
const cors = require("cors");

if (process.argv[1] === __filename) {
  console.log("Starting up server");

  const app = express();
  app.use(cors());
  app.use(express.static("site"));
  app.listen(80, function() {
    console.log("Listening on port 80");
  });
}
