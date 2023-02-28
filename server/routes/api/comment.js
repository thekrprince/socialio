const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Comment');
});

router.get('/', (req, res) => {
  res.send('All comments');
});

module.exports = router;
