const mongoose = require('mongoose');




const conectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/authpractice2");
        console.log("you are connected to mongoDB");
    } catch (error) {
        console.log("error in connecting",error);
    }
}


module.exports=conectDB;