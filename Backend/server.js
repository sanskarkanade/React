const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

//database connection
connectDB();

//express app
const app=express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/product",require("./routes/productroutes"));
app.use("/api/user", require("./routes/userroutes"));
app.use("/api/cart", require("./routes/cartroutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});