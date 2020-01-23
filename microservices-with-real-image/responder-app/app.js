const express = require('express');

const app = express();
const port = 9000;

app.use('/api/calling', (req, res) => {
  console.log('get new request form caller app...');
  res.set('Content-Type', 'application/json');
  res.status(200).send({ msg: 'This is response from responder-app.' });
});

app.use('/', (req, res) => {
  res.send('This is responder-app release0!!!');
});

app.listen(port, () => {
  console.log('responder-app release0 is listening on port -', port);
});
