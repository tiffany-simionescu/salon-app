const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Client Name is required',
    },
    email: {
      type: String,
      trim: true,
      required: 'Client Email is required',
    },
    phone: {
      type: Number,
      required: 'Client Phone Number is required',
      minlength: [10, 'Too short'],
      maxlength: [10, 'Too long'],
    },
    date: {
      Type: Date,
      required: 'Date is required',
    },
    time: {
      Type: String,
      required: 'Time is required',
    },
    teamMember: {
      type: ObjectId,
      ref: 'Team',
      required: 'Team member is required',
    },
    service: {
      type: ObjectId,
      ref: 'Services',
      required: 'Service type is required',
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('Appointments', appointmentSchema);