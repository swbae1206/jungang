const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  // const { name, author, isComplete, date, uid } = req.body;
  
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true, // 465 포트 또는 587 포트일 경우 true
    auth: {
      user: "swbae77",
      pass: "1R95DZSGQ9SF",
    },
  });
    
  const mailOptions = {
    from: "swbae77@naver.com",
    to: "swbae77@naver.com",
    subject: "고객이 중앙기계에 문의 메일을 보냈습니다.",
    text: "Node.js로 보내는 첫 이메일입니다!",
  };
    
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      }
      res.send("success")
    });
  } catch (err) {
    res.status(500).send(error.message);
  }
  
})

module.exports = router;
