const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");

const productRouter = require("./routes/products.js");
const deliveryRouter = require("./routes/delivers.js");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("backend/uploads"));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);

app.use("/delivery",deliveryRouter);
app.use('/product',productRouter);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
