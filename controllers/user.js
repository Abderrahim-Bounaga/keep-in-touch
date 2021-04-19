const User = require('../models/user');
const nodemailer = require("nodemailer");


exports.Mail = async (req,res)=>{
    const {Prénom, Nom, Email,Téléphone, Message}= req.body
    const user = new User({
        Prénom: Prénom,
        Nom: Nom,
        Email: Email,
        Téléphone: Téléphone,
        Message: Message,
    });
    try {
        const savedUser = await user.save();
        res.status(200).json({
            error: null,
            data: savedUser,
            
        })
    } catch (error) {
        res.status(400).json({error})
    }
}


exports.Liste = (req,res,next)=> {
    User.find({})
      .then((Particip) =>{
        res.statusCode = 200;
        res.json(Particip)})
        .catch((err) => {console.log(err)})
}





// send mail //

exports.Send =async (req,res)=>{
    const {subject,text}= req.body
    const Email= req.params.Email
    const user = User.findOne({Email: Email})
    if(user){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'tessstt894@gmail.com',
              pass: 'testtest20099'
            }
          });
          
          var mailOptions = {
            from: 'tessstt894@gmail.com',
            to: `${Email}`,
            subject: `${subject}`,
            text: `${text}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
            res.send('email sent')
    }else{
        console.log("Not send")
    }
}
    