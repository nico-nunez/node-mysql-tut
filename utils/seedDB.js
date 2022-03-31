require('dotenv').config();

const connection = require('../configs/db');
const { faker } = require('@faker-js/faker');

const removeAllUsers = () => {
  connection.query('DELETE FROM users', (err, results, fields) => {
    if (err) throw err;
    console.log('Users deleted');
  });
};

const insertUsers = (num) => {
  const userData = [];
  for (let i = 0; i < num; i++) {
    const newUser = [faker.internet.email(), faker.date.past()];
    userData.push(newUser);
  }
  connection.query(
    'INSERT INTO users (email, created_at) VALUE ?',
    [userData],
    (err, results, fields) => {
      if (err) throw err;
      console.log('Users insterted', results);
    }
  );
};

const seedDB = () => {
  connection.connect();
  removeAllUsers();
  insertUsers(500);
  connection.end();
};

seedDB();
