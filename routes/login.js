const express = require("express");

const router = express.Router();

router.post("/login",require("../controller/login"));

module.exports = router;