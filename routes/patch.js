const express  = require("express");
const router = express.Router();

router.patch("/patch",require("../controller/patch"));

module.exports = router