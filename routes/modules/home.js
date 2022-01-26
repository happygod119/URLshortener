const express = require("express");

const router = express.Router();

const Url = require("../../models/url");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/:shortId", async (req, res) => {
  try {
    const shortUrl = `http://localhost:3000/${req.params.shortId}`;
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.redirect(url.fullUrl);
    } else {
      res.status(404).json("No url found");
    }
  } catch (error) {
    console.log(error);
    res.render("index", { error: true });
  }
});

module.exports = router;
