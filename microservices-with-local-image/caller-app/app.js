const express = require('express');
const rp = require('request-promise');

const app = express();
const port = 9000;

app.use('/call', (req, res) => {
  const options = {
    method: 'GET',
    uri: 'http://responder-app-service.default.svc.cluster.local:9000/api/calling',
    json: true // Automatically stringifies the body to JSON
  };
  try {
    console.log('inside try------update by one dev team menber');
    return rp(options)
      .then((response) => {
        console.log('response from responder-app----------------', response);
        res.set('Content-Type', 'application/json');
        res.status(200).send(response);
      }).catch(err => {
        res.status(500).send({ msg: 'Error in calling responder-app' });
    })
  } catch (error) {
    next(error);
  }
  
});

app.use('/health', (req, res) => {
  res.send('caller-app helth is good!!!');
});

app.use('/', (req, res) => {
  res.send('This is caller-app release0-update!!!');
});

app.listen(port, () => {
  console.log('caller-app release0 is listening on port -', port);
});
