const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customerEmail: String,
  amount: Number,
  status: { type: String, default: 'Pending' }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
