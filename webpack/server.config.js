const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { buildConfig } = require('./base.config');

const config = buildConfig();

config.target = 'node';
config.node = {
    __dirname: true,
};
config.entry = {
    build: path.join(__dirname, '..', 'build', 'build.js'),
};
config.output = {
    path: path.join(__dirname, '..', 'dist'),
};
config.externals = [nodeExternals()];
config.plugins.push({
    apply: (compiler) => {
      compiler.hooks.afterEmit.tap('BuildIndexHTMLPlugin', (compilation) => {
        exec(`node ${__dirname}/../dist/build.js`, (err, stdout, stderr) => {
          if (stdout) {
              fs.writeFileSync(`${__dirname}/../public_html/index.html`, stdout);
          }
          if (stderr) {
            console.error(stderr);
          }
        });
      });
    }
});

module.exports = config;