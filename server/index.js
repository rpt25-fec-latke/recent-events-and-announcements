const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const db = require('../database');

app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/events_and_announcements', async (req, res) => {
  const queryId = req.query.id || 1;
  const responseData = {};

  try {
    const { data } = await axios.get(`http://localhost:3008/game_info/events/?id=${queryId}`);
    responseData.gamePictures = data;
    res.status(200).send(responseData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = app;
