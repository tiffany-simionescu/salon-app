const Appointment = require('../models/appointments');
const Team = require('../models/team');
const Services = require('../models/services');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    const newAppointment = await new Appointment(req.body).save();
    res.json(newAppointment);
    // const { name, email, phone, date, time, teamMember, service} = req.body;
    // res.json(await new Appointments(
    //   { name },
    //   { email },
    //   { phone },
    //   { date },
    //   { time },
    //   { teamMember },
    //   { service }
    //   ).save());
  } catch (err) {
    res.status(400).send('Create appointment failed')
  }
};

exports.list = async (req, res) => {
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, limit } = req.body;
    const appointment = await Appointment.find({})
    .populate('service')
    .populate('teamMember')
    .sort([[ sort, order ]])
    .limit(limit)
    .exec();

    res.json(appointment);
  } catch (err) {
    console.log(err);
  }
};

exports.read = async (req, res) => {
  const { _id } = req.params;

  const appointment = await Appointment.findOne({ _id })
    .populate('service')
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