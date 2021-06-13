const Team = require('../models/team');
const Services = require('../models/services');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newTeamMember = await new Team(req.body).save();
    res.json(newTeamMember);
  } catch (err) {
    res.status(400).json({
      err: err.message,
    })
  }
};

exports.list = async (req, res) => {
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, limit } = req.body;
    const team = await Team.find({})
    .populate('services')
    .sort([[ sort, order ]])
    .limit(limit)
    .exec();

    res.json(team);
  } catch (err) {
    console.log(err);
  }
};

exports.read = async (req, res) => {
  const teamMember = await Team.findOne({ slug: req.params.slug })
    .populate('services')
    .exec();
  res.json(teamMember);
};

exports.listRelated = async (req, res) => {
  const teamMembers = await Team.findById(req.params.serviceId).exec();

  const related = await Team.find({
    _id: { $ne: team._id },
    services: team.services,
  })
    // .limit(3)
    .populate("services")
    .populate("postedBy")
    .exec();

  res.json(related);
};

exports.getServices = (req, res) => {
  Services.find({ parent: req.params._id }).exec((err, services) => {
    if (err) console.log(err);
    res.json(services);
  });
};

// exports.update = async (req, res) => {
//   const { name, img, instagram, bio, services } = req.body;
//   try {
//     const updated = await Team.findOneAndUpdate(
//       { slug: req.params.slug }, 
//       { name, slug: slugify(name) },
//       { img },
//       { instagram },
//       { bio },
//       { services },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(400).send('Team Member Update Failed.')
//   }
// };


exports.update = async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const updated = await Team.findOneAndUpdate(
      { slug: req.params.slug }, 
      req.body, 
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log('TEAM MEMBER UPDATE ERROR --- ', err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Team.findOneAndRemove({ 
      slug: req.params.slug 
    }).exec();
    res.json(deleted); 
  } catch (err) {
    console.log(err)
    return res.status(400).send('Team Member delete failed')
  }
};