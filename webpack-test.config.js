const config = require("./webpack.config.js");
const path = require("path");

config.entry = {}
config.output = {
  path: path.join(__dirname, "src", "test"), 
  filename: "test-bundle.js"
}

module.exports = config
