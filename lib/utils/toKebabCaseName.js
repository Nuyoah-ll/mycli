module.exports = function toKebabCaseName(name) {
  const regRxp = /[A-Z]/g;
  // 将第一位变成小写
  name = name[0].toLowerCase() + name.substring(1);
  // 匹配到大写字母之后，将它变成“-小写”的形式
  return name.replace(regRxp, _ => {
    return `-${_.toLowerCase()}`
  })
};