const path = require("path");
const glob = require("glob");
const { exec } = require("child_process");

const basePath = path.resolve("src", "apps");

class autoUploadPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise("autoUploadPlugin", (compilation) => {
      exec(`npm run upload`);
      if (!compiler.options.watch) return Promise.resolve();
      console.log("test");
      return Promise.resolve();
    });
  }
}

module.exports = autoUploadPlugin;
