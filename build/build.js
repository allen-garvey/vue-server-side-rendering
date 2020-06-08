import renderer from './renderer';

renderer.render().then(html => {
  console.log(html);
}).catch(err => {
  console.error(err);
});