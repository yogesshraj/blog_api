const express = require("express");
const router  = express.Router();

const middleware = require("../middleware/middleware");

router.get("/getall",middleware,require("../controller/get").getall);
router.get("/:author",require("../controller/get").getAuthor);


module.exports = router;