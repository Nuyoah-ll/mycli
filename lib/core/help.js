const program = require("commander");

const optionsInfo = () => {
  program.option("-D -dest <dest>", "a destination folder,for example: -D /views/home");
  program.on("--help", () => {
    console.log("Others:");
    console.log("  other expected options");
  })
}


module.exports = optionsInfo;