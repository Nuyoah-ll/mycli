#!/usr/bin/env node

const program = require("commander");
const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

program.version(require("./package.json").version, "-v, --version");
program.version(require("./package.json").version);

// 添加帮助信息
helpOptions();
createCommands();

program.parse(process.argv);