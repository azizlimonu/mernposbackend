const billsModel = require('../models/billsModel');

// /addBills
const addBillsController = async (req, res) => {
	try {
		const newBill = new billsModel(req.body);
		console.log(newBill);
		await newBill.save();
		res.send("Bill Created Successfully");
	} catch (error) {
		res.send("Error in addBillController");
		console.log(`Error from Add bill : ${error}`);
	}
}

// /getBills
const getBillsController = async (req, res) => {
	try {
		const bills = await billsModel.find();
		res.send(bills);
	} catch (error) {
		console.log(`Error from get bills : ${error}`);
	}
}


module.exports = { addBillsController, getBillsController };