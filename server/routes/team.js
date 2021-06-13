const express = require('express');
const router = express.Router();

// middlewares
const { authCheck } = require('../middlewares/auth');

// import
const {
  create,
  list,
  read,
  getServices,
  listRelated,
  update,
  remove
} = require('../controllers/team');

// routes
router.post('/team', authCheck, create);
router.get('/team', list);
router.get('/team/:slug', read);
router.get('/team/services/:_id', getServices);
router.get('/team/related/:serviceId', listRelated);
router.put('/team/:slug', authCheck, update);
router.delete('/team/:slug', authCheck, remove);
module.exports = router;