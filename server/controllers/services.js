const Services = require('../models/services');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    res.json(await new Services({ name, slug: slugify(name) }).save());
  } catch (err) {
    res.status(400).send('Create service failed')
  }
};

exports.list = async (req, res) => {
  res.json(await Services.find({}).sort({ createdAt: -1 }).exec());
};

exports.read = async (req, res) => {
  const service = await Services.findOne({ slug: req.params.slug }).exec();
  res.json(service);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Services.findOneAndUpdate(
      { slug: req.params.slug }, 
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send('Service Update Failed.')
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Services.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted); 
  } catch (err) {
    res.status(400).send('Service Delete Failed.')
  }
};