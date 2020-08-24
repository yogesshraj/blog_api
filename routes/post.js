const express = require("express");
const router = express.Router();

router.post("/post",require("../controller/post"));

module.exports = router;