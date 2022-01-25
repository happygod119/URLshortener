// Express 環境
const express = require("express");
const app = express();
const port = 3000;



// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hello world')
})

// 設定port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});