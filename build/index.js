import { createApp } from '../src/index';
const fs = require('fs');
const template = fs.readFileSync(`${__dirname}/../templates/index.template.html`, 'utf-8');

const pageContext = {
  title: 'Vue Server Rendering Test',
};

const renderer = require('vue-server-renderer').createRenderer({ template });

renderer.renderToString(createApp(), pageContext).then(html => {
  console.log(html);
}).catch(err => {
  console.error(err);
})