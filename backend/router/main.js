const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/main");
router.post("/", createUser);

module.exports = router;
