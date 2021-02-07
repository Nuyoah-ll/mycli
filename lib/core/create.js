const program = require("commander");
const { createProjectAction, addVueComponentAction, addVueViewsAction, addVueStoreAction } = require("./actions");
const toKebabCaseName = require("../utils/toKebabCaseName");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("create project template forked from github")
    .action(createProjectAction);

  program
    .command("addcpn <name>")
    .description("create a vue component, for example: li addcpn Profile [-D components/profile]")
    .action(name => {
      addVueComponentAction(name, program.opts().Dest || "src/components");
    });

  program
    .command("addview <name>")
    .description("create a vue page and it's router config, for example: li addview Shop [-D views/home]")
    .action(name => {
      addVueViewsAction(name, program.opts().Dest || `src/views/${toKebabCaseName(name)}`);
    });

  program
    .command("addstore <name>")
    .description("create a vuex module and it's constant-type file, for example: li addstore Blog [-D views/home]")
    .action(name => {
      addVueStoreAction(name, program.opts().Dest || `src/store/modules/${toKebabCaseName(name)}`);
    })
}

module.exports = createCommands;