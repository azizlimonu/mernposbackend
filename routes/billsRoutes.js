const express = require('express');
const { addBillsController, getBillsController } = require('../controllers/billsController');

const router = express.Router();

router.post('/addBills',addBillsController);
router.get('/getBills', getBillsController);

module.exports = router;