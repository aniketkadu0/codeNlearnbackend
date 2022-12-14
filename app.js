const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./database/db");

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoute);

app.listen(process.env.PORT || 3000)

module.exports = app;
