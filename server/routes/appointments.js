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
} = require('../controllers/appointments');

// routes
router.post('/appointments', create);
router.get('/appointments', authCheck, list);
router.get('/appointments/:appointmentId', authCheck, read);
router.put('/appointments/:appointmentId', authCheck, update);
router.delete('/appointments/:appointmentId', authCheck, remove);
module.exports = router;