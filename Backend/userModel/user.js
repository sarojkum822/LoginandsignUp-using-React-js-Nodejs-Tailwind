const { default: mongoose, mongo } = require("mongoose")

// const mongoose = require(mongoose);

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String
}) 

module.exports=mongoose.model('users',userSchema);