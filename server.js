const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set("strictQuery", false);

const app = require("./app");
const port = process.env.PORT || 8000;

const database = async () => {
  try {
    mongoose.connect(
    process.env.DB_URL,
    {   useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error){
            console.log("connected to mongoDB!");
        }else{
            console.log("connection to mongoDB failed \n" + error);
        }
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

database().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})

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

