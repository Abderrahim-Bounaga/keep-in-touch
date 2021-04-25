const mongoose = require('mongoose');



const user_Mail =new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    message:{
        type:String,
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

const userMail = mongoose.model("userMail", user_Mail);
module.exports= userMail;