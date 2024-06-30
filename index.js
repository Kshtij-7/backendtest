// server.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const cors=require("cors");
require("dotenv").config();
console.log("hi");
const mySecret = process.env["apiKeyTest"];
app.use(cors({
  origin: 'https://kshtij-7.github.io'
}));
app.get("/api/secret", (req, res) => {
  res.json({ apiKey: mySecret });
  console.log("reqest happens");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
