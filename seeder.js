const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDb = require('./db/dbConnect');
const itemModel = require('./models/itemsModel');
const items = require('./data');

// Configuration
dotenv.config();

// Connect to DB // from config/config.js
connectDb();

// Seeding Function
const importData = async () => {
  try {
    // First delete all the existing data
    await itemModel.deleteMany();

    // Again add the items from data.js in our Db
    const itemsdata = await itemModel.insertMany(items);
    console.log("All Items Added");
    process.exit();

  } catch (error) {
    console.log(`{error}`);
    process.exit(1);
  }
};

importData();


