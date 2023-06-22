const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require('./db/dbConnect');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log(`Server Running On Port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});