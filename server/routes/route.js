const express = require("express");
const { EmptyPage, GetUsers } = require("../controllers/controller");

const router = express.Router();

router.route("/").get(EmptyPage);
router.route("/api/get_users").get(GetUsers);

module.exports = router;
