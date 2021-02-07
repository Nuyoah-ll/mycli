const { resolve } = require("path");
const { renderFile } = require("ejs");

module.exports = function compile(template, data = {}) {
  const targetTemplate = resolve(__dirname, `../templates/${template}`);
  return new Promise((resolve, reject) => {
    renderFile(targetTemplate, data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  })
}