const Loan = require('../models/loan');
const transporter = require('../config/mailer');


exports.applyLoan = async (req, res) => {
  const { customerEmail, amount } = req.body;
  const loan = new Loan({ customerEmail, amount });
  await loan.save();
  res.status(201).send(loan);
};


exports.approveLoan = async (req, res) => {
  const { id } = req.params;
  const loan = await Loan.findByIdAndUpdate(id, { status: 'Approved' }, { new: true });

  if (!loan) {
    return res.status(404).send('Loan not found');
  }


  const mailOptions = {
    from: 'sundaresansundarraj@gmail.com',
    to: loan.customerEmail,
    subject: 'Loan Approval',
    text: `Your loan for $${loan.amount} has been approved.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.send(loan);
};


exports.getLoanById = async (req, res) => {
  const { id } = req.params;
  const loan = await Loan.findById(id);

  if (!loan) {
    return res.status(404).send('Loan not found');
  }

  res.send(loan);
};
