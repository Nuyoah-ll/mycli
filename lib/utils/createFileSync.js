const { existsSync, mkdirSync } = require("fs");
const { dirname } = require("path");

module.exports = function createFileSync(path) {
  if (existsSync(path)) {
    return true;
  }
  else {
    if (createFileSync(dirname(path))) {
      mkdirSync(path);
      return true;
    }
  }
}