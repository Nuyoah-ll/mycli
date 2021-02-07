const { promisify } = require("util");
const { resolve } = require("path");
const { writeFile } = require("fs").promises;

const download = promisify(require("download-git-repo"));
const open = require("open");

const { vueTemplateRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const compile = require("../utils/compile");
const toKebabCaseName = require("../utils/toKebabCaseName");
const createFileSync = require("../utils/createFileSync");



const createProjectAction = async (project) => {
  // clone模板
  console.log("li is making great efforts to download vue2 template for you, please wait a moment~");
  await download(vueTemplateRepo, project, { clone: true }).then(() => { }, err => console.log(err));
  console.log("template has been cloned successfully.now will executive command: npm install~");

  // 执行npm install命令
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  // 执行npm run serve命令
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });

  // 自动打开浏览器
  open("http://localhost:8080");
}

const addVueComponentAction = async (name, dest) => {

  // 编译ejs模板
  const result = await compile("vue.component.ejs", { name, kebabCaseName: toKebabCaseName(name) });

  // 将由ejs模板生成的html写入.vue文件
  const targetPath = resolve(dest, `${name}.vue`);
  if (createFileSync(dest)) {
    writeFile(targetPath, result);
  }
}

const addVueViewsAction = async (name, dest) => {

  // 编译ejs模板
  const data = { name, kebabCaseName: toKebabCaseName(name) };
  const vueTemp = await compile("vue.component.ejs", data);
  const router = await compile("vue.router.ejs", data);

  console.log(dest)

  // 将由ejs模板生成的vue模板写入.vue文件，将router模板写入router.js文件
  const vuePath = resolve(dest, `${name}.vue`);
  const routerPath = resolve(dest, "router.js");
  if (createFileSync(dest)) {
    writeFile(vuePath, vueTemp);
    writeFile(routerPath, router);
  }
}

const addVueStoreAction = async (name, dest) => {

  // 编译ejs模板
  const storeTemp = await compile("vue.vuex-store.ejs");
  const types = await compile("vue.vuex-types.ejs");

  // 将由ejs模板生成的store模板写入index.js，将types模板写入types.js
  const storePath = resolve(dest, `index.js`);
  const typesPath = resolve(dest, `types.js`);
  if (createFileSync(dest)) {
    writeFile(storePath, storeTemp);
    writeFile(typesPath, types);
  }
}

module.exports = {
  createProjectAction,
  addVueComponentAction,
  addVueViewsAction,
  addVueStoreAction
}