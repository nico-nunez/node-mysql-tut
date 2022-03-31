const { application } = require('express');
const express = require('express');
const app = express();
const db = require('./configs/db');
const usersRoutes = require('./routes/users.routes');

db.connect();

app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('HELLOOOOOOOOO!!!!!!!');
});

module.exports = app;
