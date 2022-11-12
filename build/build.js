const renderer = require('./renderer.js');

renderer.render().then(html => {
  console.log(html);
}).catch(err => {
  console.error(err);
});
