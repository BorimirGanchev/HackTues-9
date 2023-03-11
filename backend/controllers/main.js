const User = require("../models/User");
const Poly = require("../models/Poly");

const createUser = async (req, res) => {
  try {
    const new_user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashSync(req.body.password, 10),
    });
    res.status(200).json({ new_user });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username });
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ username: req.body.username });
    res.ststus(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const filter = { username: req.body.old_name };
    const update = { username: req.body.new_name };
    let user = await User.findOneAndUpdate(filter, update);
    user = await User.findOne(update);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const add_poly = async (req, res) => {
  try {
    const new_poly = Poly.create({ coordinates: req.body.coordinates });
    res.status(200).json({ new_poly });
  } catch (err) {
    console.log(err);
  }
};

const get_all_polies = async (req, res) => {
  try {
    const all_pollies = await Poly.find({}).exec();
    res.status(200).json({ all_pollies });
    console.log(all_pollies);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  add_poly,
  get_all_polies,
};
