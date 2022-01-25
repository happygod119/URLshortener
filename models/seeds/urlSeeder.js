const db = require("../../config/mongoose");
const Url = require("../url");
const shortid = require("shortid"); //* 自動生成id

const shortId = shortid.generate()
db.once('open',() => {
  Url.create({
    fullUrl: "https://github.com/",
    shortUrl: `http://localhost:3000/${shortId}`,
  })
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
      console.error(error);
    });
})