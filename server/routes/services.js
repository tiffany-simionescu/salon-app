const express = require('express');
const router = express.Router();

// middlewares
const { authCheck } = require('../middlewares/auth');

// import
const {
  create,
  list,
  read,
  update,
  remove
} = require('../controllers/team');

// routes
router.post('/services', authCheck, create);
// router.post('/services', list);
router.get('/services', list);
router.get('/services/:slug', read);
router.put('/services/:slug', authCheck, update);
router.delete('/services/:slug', authCheck, remove);
module.exports = router;