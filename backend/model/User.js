const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({

    phone:{
        type:String,
        required:true,
    },
    booking:{
        type:String,
        required:true,
    },
})
const User=mongoose.model('User', userSchema,"users");
module.exports=User;