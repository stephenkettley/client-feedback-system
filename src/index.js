const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ success: false });
});

app.listen(5000);
