const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      trim: true,
      required: true,
    },
    clientEmail: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      // minlength: [10, 'Too short'],
      // maxlength: [10, 'Too long'],
    },
    date: {
      type: Date,
      required: true
    },
    teamMember: {
      type: ObjectId,
      ref: 'Team',
    },
    // teamMember: {
    //   type: String,
    //   required: false,
    // },
    service: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Appointment', appointmentSchema);