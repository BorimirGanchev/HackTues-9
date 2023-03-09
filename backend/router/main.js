const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/main");
router.route("/");
router.module.exports = router;
