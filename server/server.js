require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const express = require('express');


connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API is running .... "});
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`));

