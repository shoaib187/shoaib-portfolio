const Users = require("../models/User");

const EmptyPage = async (req, res) => {
  res.send({ message: "Welcome to Trinity" });
};

const GetUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.log("Error while getting users!", err);
  }
};

module.exports = {
  EmptyPage,
  GetUsers,
};
