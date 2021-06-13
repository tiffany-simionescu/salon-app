const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    img: String,
    instagram: String,
    bio: String,
    services: [
      {
        type: ObjectId,
        ref: "Service"
      }
    ]
  },
  {timestamps: true}
);

module.exports = mongoose.model('Team', teamSchema);