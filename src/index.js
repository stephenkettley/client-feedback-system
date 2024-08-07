const authRoutes = require("./routes/authRoutes");
const express = require("express");
require("./models/user");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./services/passport"); // nothing being assigned
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
