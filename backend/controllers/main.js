const User = require("../models/main");

const createUser = async (req, res) => {
  try {
    const new_user = await User.create({ ...req.body });
    res.status(200).json({ new_user });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username });
    res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createUser };
