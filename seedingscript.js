const mysql = require('mysql');
const faker = require('faker');
const token = require('./database.config.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: token.user,
  password: token.password,
  database: 'review_data',
});

const seedDatabase = () => {
  // code
};

seeDatabase();
