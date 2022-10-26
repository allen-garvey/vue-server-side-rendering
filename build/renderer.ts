import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

import App from '../src/components/app.vue';

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