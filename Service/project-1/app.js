const express = require('express');

const app = express();
const port = 9000;

app.use('/', (req, res) => {
  res.send('This is project1 release1!!!');
});


app.listen(port, () => {
  console.log('Project1 release1 is listening on port -', port);
});
