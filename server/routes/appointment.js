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
} = require('../controllers/appointment');

// routes
router.post('/appointment', create);
router.get('/appointment', authCheck, list);
router.get('/appointment/:appointmentId', authCheck, read);
router.put('/appointment/:appointmentId', authCheck, update);
router.delete('/appointment/:appointmentId', authCheck, remove);
module.exports = router;