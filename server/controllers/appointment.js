const Appointment = require('../models/appointment');
const Team = require('../models/team');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const newAppointment = await new Appointment(req.body).save();
    res.json(newAppointment);
  } catch (err) {
    // console.log(req.body);
    res.status(400).send('Create appointment failed')
  }
};

exports.list = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;
    const appointments = await Appointment.find({})
    .populate('teamMember.memberName')
    .sort([[ sort, order ]])
    .limit(limit)
    .exec();

    res.json(appointments);
  } catch (err) {
    console.log(err);
  }
};

exports.read = async (req, res) => {
  const { _id } = req.params;

  const appointment = await Appointment.findOne({ _id })
    .populate('teamMember')
    .exec();
  res.json(appointment);
};


exports.update = async (req, res) => {
  const { _id } = req.params;

  try {
    const updated = await Appointment.findOneAndUpdate(
      { _id }, 
      req.body, 
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log('APPOINTMENT UPDATE ERROR --- ', err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  const { _id } = req.params;

  try {
    const deleted = await Appointment.findOneAndRemove({ 
      _id
    }).exec();
    res.json(deleted); 
  } catch (err) {
    console.log(err)
    return res.status(400).send('Appointment delete failed')
  }
};