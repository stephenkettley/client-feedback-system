const authRoutes = require("./routes/authRoutes");
const express = require("express");
require("./services/passport"); // nothing being assigned

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
