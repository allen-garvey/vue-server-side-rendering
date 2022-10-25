const path = require('path');
const { buildConfig } = require('./base.config');

const config = buildConfig();
config.entry = {
    client: path.join(__dirname, '..', 'src', 'client.ts'),
};
config.output = {
    path: path.join(__dirname, '..', 'public_html', 'assets'),
};

module.exports = config;