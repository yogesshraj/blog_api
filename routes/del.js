const express = require("express");
const middleware  = require("../middleware/middleware");

const router  = express.Router();

router.delete("/del/:blogname",middleware,require("../controller/del"));

module.exports = router;