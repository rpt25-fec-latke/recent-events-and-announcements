const mysql = require('mysql');
const token = require('../database.config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: token.user,
  password: token.password,
  database: 'recent_events_and_announcements',
});

const getEventsAndAnnouncementDataForGame = (gameId, cb) => {
  connection.query(`SELECT * FROM events_and_announcements WHERE gameId = ${gameId};`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports.getEventsAndAnnouncementDataForGame = getEventsAndAnnouncementDataForGame;
