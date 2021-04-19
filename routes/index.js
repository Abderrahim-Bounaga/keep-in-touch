const nodemailer = require("nodemailer");


app.post('/', (req,res)=>{

const {Email, subject, text}= req.body;  
  
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 5050,
      secure: false,
      auth: {
        user: "winfield50@ethereal.email", // generated ethereal user
        pass: "WZMfsZpVNJH5U3sHrK", // generated ethereal password
      }, 
      
    });
  
    const msg = {
      from: '"The Express App" <theExpressApp@example.com>', // sender address
      to: `${Email}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: `${text}`, // plain text body
    }
    // send mail with defined transport object
    let info = await transporter.sendMail(msg);
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.send('email sent')
})



