const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

router.get("/get-all-items", itemController.getAllItems);
router.post("/add-item", itemController.addItem);
router.post("/edit-item", itemController.editItem);
router.post("/delete-item", itemController.deleteItem);

module.exports = router;
