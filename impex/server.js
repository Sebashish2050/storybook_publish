const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise-native');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/impex', (req, res) => {
  const options = {
    url: 'http://internal-d471ad54-qa01-beasqa01inte-8ada-587025982.us-west-2.elb.amazonaws.com/api/v1/hybris/impex',
    headers: {
      retailermoniker: 'magentodemo',
      parentretailer: 'magentodemo',
      storename: 'apparel-uk',
      storebaseurl: 'https://hybris-1905-qa01.narvar.qa',
      version: '1905'
    }
  };
  request(options, (err, response, body) => {
    if(err) {
      console.log('error is: ', err);
      res.status(400).send('FAILED');
      return;
    }
    res.status(200).send(response);
  });
});

app.listen(3002, () => {
  console.log('listening to port 3002');
});