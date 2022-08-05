const Color = require("./models/color-model");

// Get all colors
const getColors = async (req, res, next) => {
  const colors = await Color.find().exec();
  res.json(colors);
};

// Update votes value in Color
const updateColor = async (req, res, next) => {
  let id = { _id: `${req.params.cid}` };
  let votes = { votes: req.body.votes };

  const doc = await Color.findOneAndUpdate(id, votes, {
    new: true,
    returnOriginal: false,
  });
  res.json(doc);
};

exports.updateColor = updateColor;
exports.getColors = getColors;
