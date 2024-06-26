const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 4000

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  console.log('post fetch')
  return res.send(posts);
});

app.post('/posts/create', async (req, res) => {
  console.log('post create')
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  
  await axios.post('http://event-clusterip:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title,
    },
  });

  return res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Event Received', req.body.type);

  return res.send({});
});

app.listen(PORT, () => {
  console.log('Listening on on 4000');
});
