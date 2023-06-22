const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require('./db/dbConnect');
const app = express();
dotenv.config();

app.use(express.json());
// routes
const userRoutes = require("./routes/userRoutes");
const itemsRoutes = require("./routes/itemRoutes");


app.get("/", (req, res) => res.status(200).send("API OKE BOS"));

// routes API
app.use("/api/users/", userRoutes);
app.use("/api/items/", itemsRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log(`Server Running On Port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});