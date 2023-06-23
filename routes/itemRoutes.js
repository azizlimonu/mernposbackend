const express = require('express');
const { getItemController, addItemController, editItemController, deleteItemController } = require('../controllers/itemController');

const router = express.Router();

router.get('/getItem',getItemController);
router.post('/addItem',addItemController);
router.put('/editItem',editItemController);
router.post('/deleteItem',deleteItemController);

module.exports = router