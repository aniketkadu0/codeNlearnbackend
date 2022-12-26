// const mongoose = require("mongoose");
// require('dotenv').config();
// mongoose.set("strictQuery", false);

// const app = require("./app");
// const port = process.env.PORT || 8000;

// const database = mongoose.connect(
//     process.env.DB_URL,
//     {   useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (error) => {
//         if (!error){
//             console.log("connected to mongoDB!");
//         }else{
//             console.log("connection to mongoDB failed \n" + error);
//         }
//     }
// )
// .then(() => {
//     app.listen(port, () => {
//         console.log("listening for requests");
//     })
// })

// module.exports = database;