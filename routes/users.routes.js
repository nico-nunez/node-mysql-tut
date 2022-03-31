const { Router } = require('express');
const router = Router();
const db = require('../configs/db');

router.get('/', (req, res) => {
  db.query(
    'SELECT * FROM users ORDER BY created_at DESC',
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

router.post('/', (req, res) => {
  const newUser = [req.body.email, Date()];
  db.query(
    'INSERT INTO users (email, created_at) VALUES ?',
    [newUser],
    (err, results, fields) => {
      res.redirect('/');
    }
  );
});

router.get('/count', (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM users', (err, results, fields) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

module.exports = router;
