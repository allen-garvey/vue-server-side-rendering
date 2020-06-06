import { createApp } from '../src/index';
const renderer = require('vue-server-renderer').createRenderer();

renderer.renderToString(createApp()).then(html => {
  console.log(html);
}).catch(err => {
  console.error(err);
})