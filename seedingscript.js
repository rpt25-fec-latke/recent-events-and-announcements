const mysql = require('mysql');
const faker = require('faker');
const token = require('./database.config.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: token.user,
  password: token.password,
  database: 'recent_events_and_announcements',
});

const seedDatabase = (numGames) => {
  let startingGameId = 1;
  const currentDate = new Date();
  const twoWeeksAgo = new Date();

  const timeZoneOffset = currentDate.getTimezoneOffset();

  currentDate.setMinutes(currentDate.getMinutes() - timeZoneOffset);
  twoWeeksAgo.setMinutes(twoWeeksAgo.getMinutes() - timeZoneOffset);
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

  const types = ['Contest', 'Challenge Event', 'Perks Event', 'Regular Update', 'Live-Stream / Broadcast'];
  const typesLength = types.length;

  while (startingGameId <= numGames) {
    let announcementNumber = 1;

    while (announcementNumber <= 2) {
      const recentDate = faker.date.between(currentDate, twoWeeksAgo);
      const year = recentDate.getFullYear();
      const month = (recentDate.getMonth() + 1).toString().length === 1 ? `0${recentDate.getMonth() + 1}` : recentDate.getMonth() + 1;
      const day = (recentDate.getDay() + 1).toString().length === 1 ? `0${recentDate.getDay() + 1}` : recentDate.getDay() + 1;
      const hours = (recentDate.getHours()).toString().length === 1 ? `0${recentDate.getHours()}` : recentDate.getHours();
      const minutes = (recentDate.getMinutes()).toString().length === 1 ? `0${recentDate.getMinutes()}` : recentDate.getMinutes();
      const seconds = (recentDate.getSeconds()).toString().length === 1 ? `0${recentDate.getSeconds()}` : recentDate.getSeconds();

      const data = {
        gameId: startingGameId,
        title: `'${faker.name.title()}'`,
        type: `'${types[Math.floor(Math.random() * typesLength)]}'`,
        description: `'${faker.lorem.paragraph()}'`,
        announcementDate: `'${year}-${month}-${day} ${hours}:${minutes}:${seconds}'`,
      };

      db.query(`INSERT INTO events_and_announcements (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).join(', ')});`, (err) => {
        if (err) {
          console.log(`Error seeding event/announcement for gameId ${startingGameId} into table events_and_announcements: `, err);
        }
      });

      announcementNumber++;
    }

    startingGameId++;
  }
  console.log(`Events & announcements for all ${startingGameId} games seeded successfully`);
};

seedDatabase(100);
