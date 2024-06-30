// server.js
const express = require("express");
const app = express();
const port = 3000;
const cors=require("cors");
require("dotenv").config();
console.log("hi");
const mySecret = process.env.mySecret;
app.use(cors({
  origin: 'https://kshtij-7.github.io'
}));
app.get("/api/secret", (req, res) => {
  const referer = req.get('Referer');
  const origin = req.get('Origin');
  if (
    (referer && referer.startsWith("https://kshtij-7.github.io")) ||
    origin && origin.startsWith("https://kshtij-7.github.io")
  ) {
    console.log(referer);
    res.json({ apiKey: mySecret });
  } else {
    console.log(referer, origin);
    res.status(403).send("Forbidden");
  }
  console.log("reqest happens");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
