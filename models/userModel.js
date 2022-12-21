const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            //this will trim all the spaces for us
            //in case we get wrong input from frontend
            trim: true,
            required:true,
        },
        lastName:{
            type: String,
            trim:true,
            required:true,
        },
        email:{
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        password:{
            type: String,
            required: true,
        },
        role:{
            type: String,
            default : 'user'
        },
        resetPasswordLink:{
            data: String,
            default:'',
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);