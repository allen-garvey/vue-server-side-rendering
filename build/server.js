import renderer from './renderer';
const express = require('express');
const server = express();

server.use('/assets', express.static('public_html/assets'));
server.get('*', (req, res) => {

    renderer.render().then(html => {
        res.end(html);
      }).catch(err => {
        res.status(500).end(err);
      });
});
  
server.listen(3000);