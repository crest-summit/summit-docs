const express   = require("express");
const cors = require("cors");

if (process.argv[1] === __filename) {
  console.log("Starting up server");

  const PORT = process.env.PORT || 80;

  const app = express();
  app.use(cors());
  app.use(express.static("site"));
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
  });
}
