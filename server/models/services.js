const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      trim: true,
      // required: 'Service Name is required',
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Service', serviceSchema);