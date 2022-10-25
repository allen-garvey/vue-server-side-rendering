import App from '../src/components/app.vue';
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const fs = require('fs');

const templateFileName = `${__dirname}/../templates/index.template.html`;
const app = createSSRApp(App);

export default {
    render: () => 
      Promise.all([
        fs.promises.readFile(templateFileName, 'utf-8'),
        renderToString(app)
      ]).then(([templateHtml, appHtml]) => templateHtml.replace('<!--vue-ssr-outlet-->', appHtml))
};