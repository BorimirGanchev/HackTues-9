const express = require("express");
const express_router = express.Router();
const { createUser } = require("../controllers/main");
express_router.route("/").post(createUser);

module.exports = router;
