const express = require("express");
const router = express.Router();
const billController = require("../controller/billController");

router.post("/charge-bill", billController.chargeBill);
router.get("/get-all-bills", billController.getAllBills);

module.exports = router;