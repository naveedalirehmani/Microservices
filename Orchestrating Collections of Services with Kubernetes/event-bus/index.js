const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
  const event = req.body;
  console.log('event receinved', event)

  events.push(event);

  // posts
  await axios.post('http://posts-clusterip:4000/events', event);
  //comments
  axios.post('http://comments-clusterip:4001/events', event);
  //query
  axios.post('http://query-clusterip:4002/events', event);
  //moderation
  axios.post('http://moderation-clusterip:4003/events', event);

  return res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
