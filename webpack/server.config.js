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
    build: path.join(__dirname, '..', 'build', 'build.ts'),
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
              const outDir = `${__dirname}/../public_html`;
              fs.mkdirSync(outDir, {recursive: true});
              fs.writeFileSync(`${outDir}/index.html`, stdout);
          }
          if (stderr) {
            console.error(stderr);
          }
        });
      });
    }
});

module.exports = config;