const express = require("express");

const router = express.Router();

const home = require("./modules/home");
const shortUrl = require('./modules/shortUrl')


router.use("/", home);
router.use("/urls", shortUrl);

module.exports = router;
