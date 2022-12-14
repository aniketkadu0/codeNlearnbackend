// const http = require("http");
// const app = require("./app");
// const server = http.createServer(app);
// require("./database/db");

// if (process.env.NODE_ENV !== "production"){
//   require("dotenv").config();
// }

// const port = process.env.PORT || 8000;

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
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

