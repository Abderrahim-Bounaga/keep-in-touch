const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5050;
const user = require('./routes/user');
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost:27017/send-mail',{ useNewUrlParser: true,  useUnifiedTopology: true ,useCreateIndex: true},(err , db)=>{
    if(db){
        console.log("db connected")
    }
    else{
        console.log('db not connected');
    }
  }
  );

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',user);


app.listen(PORT, ()=>{
    console.log("server connected "+ PORT)
});

module.exports= app