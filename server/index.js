const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ success: true });
});

app.listen(5000);
