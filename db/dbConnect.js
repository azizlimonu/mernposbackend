const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB Connection Successful");
  } catch (error) {
    console.error("Mongo DB Connection Failed:", error);
    throw error;
  }
};

module.exports = connectDB;