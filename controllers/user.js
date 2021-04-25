const User = require('../models/user');
const nodemailer = require("nodemailer");


exports.Mail = async (req,res)=>{
    const {firstName, lastName, email,phoneNumber, message}= req.body
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
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
    User.find()
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

exports.DateFinde = async(req, res)=>{
  const {date}= req.body;
  // let today = new Date()

  let dt = date.split("-");
  // console.log(dt);
  console.log(date);
  let dateEnd = dt[0]+ "-" + dt[1] + "-" + (parseInt(dt[2])+1);
  // console.log(dateEnd);

  const end = new Date(Date.parse(dateEnd));
  console.log(end);
  const debu = new Date(Date.parse(date));
  console.log(debu);
  // console.log("the day " + temp.getDay());
  // console.log(temp.getFullYear())
  // console.log(temp.getMonth());
  
  // console.log(temp);
  // console.log("date " + date);

  const DateTime= await User.find({Date: { $gte: debu, $lte: end } });

  if(!DateTime){
    res.send("err")
  }
  return res.send("date "+ DateTime)

}
    