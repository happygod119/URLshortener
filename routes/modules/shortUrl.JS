const express = require("express");
const router = express.Router();
const Url = require("../../models/url");
const shortid = require("shortid");
const validUrl = require("valid-url");

router.post("/", async (req, res) => {
  const fullUrl = req.body.fullUrl;
  if (validUrl.isUri(fullUrl)){
    try{
      let url = await Url.findOne({ fullUrl });
  if (url) {
    res.render("Success", { shortUrl });
  } else {
    const shortId = shortid.generate();
    let shortUrl = `http://localhost:3000/${shortId}`;
    url = new Url({
      fullUrl,
      shortUrl,
    });
    await url.save();
    res.render("Success", { shortUrl });
  }}catch (error) {
      res.status(500).json('Server error');
  }
};
})

module.exports = router;
