const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const dbConnect = require('./db/dbConnect');

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
const userRoutes = require("./routes/userRoutes");
const itemsRoutes = require("./routes/itemRoutes");
const billsRoutes = require("./routes/billsRoutes");

app.get("/", (req, res) => res.status(200).send("API OKE BOS"));

// routes API
app.use("/api/users/", userRoutes);
app.use("/api/items/", itemsRoutes);
app.use("/api/bills/", billsRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log(`Server Running On Port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});