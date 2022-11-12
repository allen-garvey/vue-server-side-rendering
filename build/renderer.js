const fs = require('fs');
const path = require('path');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const App = require('../dist/app.js').default;

const app = createSSRApp(App);

const templateFileName = path.resolve(path.join(__dirname, '../templates/index.template.html'));

module.exports = {
    render: () => 
      Promise.all([
        fs.promises.readFile(templateFileName, 'utf-8'),
        renderToString(app)
      ]).then(([templateHtml, appHtml]) => templateHtml.replace('<!--vue-ssr-outlet-->', appHtml))
};
