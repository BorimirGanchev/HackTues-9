const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  add_poly,
  get_all_polies,
} = require("../controllers/main");
router.route("/login").post();
router.route("/poly").post(add_poly);
router.route("/polies").get(get_all_polies);
router.route("/create").post(createUser);
router.route("/update").patch(updateUser);
router.route("/delete").delete(deleteUser);
router.route("/:username").get(getUser);
module.exports = router;
