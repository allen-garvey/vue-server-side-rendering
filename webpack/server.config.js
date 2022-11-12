const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { buildConfig } = require('./base.config');

module.exports = (options) => {
  const config = buildConfig(options);

  config.target = 'node';
  config.node = {
      __dirname: true,
  };
  config.entry = {
      app: path.join(__dirname, '..', 'src', 'components', 'app.vue'),
  };
  config.output = {
      path: path.join(__dirname, '..', 'dist'),
      library: {
        type: 'commonjs2'
      }
  };
  config.externals = [nodeExternals()];
  config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('BuildIndexHTMLPlugin', (compilation) => {
          exec(`node ${__dirname}/../build/build.js`, (err, stdout, stderr) => {
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

  return config;
};
