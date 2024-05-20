const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/apply', loanController.applyLoan);
router.put('/approve/:id', loanController.approveLoan);
router.get('/loan/:id', loanController.getLoanById);

module.exports = router;
