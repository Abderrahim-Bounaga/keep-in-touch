const mongoose = require('mongoose');

const user_Mail =new mongoose.Schema({
    Prénom:{
        type:String,
    },
    Nom:{
        type:String,
    },
    Email:{
        type:String,
    },
    Téléphone:{
        type:Number,
    },
    Message:{
        type:String,
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

const userMail = mongoose.model("userMail", user_Mail);
module.exports= userMail;