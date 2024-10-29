const express = require("express");
const { EmptyPage, GetUsers } = require("../controllers/controller");

const router = express.Router();
router.route("/").get(GetUsers);
router.route("/api/get_users").get(EmptyPage);

module.exports = router;
