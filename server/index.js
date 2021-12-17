const express = require('express');
var app = express();
var db = require('./Db');
var cloudinary=require('./cloudinary')
const cors= require('cors');
const bodyParser=require('body-parser');
const { urlencoded } = require("body-parser");
const registerRouter= require("./routes/registerRouter");
const registerVendor=require("./routes/registerVendor")
const loginUser=require("./routes/loginUser");
const showAllProduct=require("./routes/showAllProducts");
const getOneProduct=require("./routes/getOneProduct");
const showVendorProducts=require("./routes/showVendorProduct");
const createProduct=require("./routes/createProduct");
const loginVendor=require("./routes/loginVendor");
// const try2=require('./routes/registerRouter');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/register_customer",registerRouter);
app.use("/register_vendor",registerVendor);
app.use("/loginUser",loginUser);
app.use("/loginVendor",loginVendor);
app.use("/showAllProducts",showAllProduct);
app.use("/showVendorProduct",showVendorProducts);
app.use("/createProduct",createProduct);
app.use("/getOneProduct",getOneProduct);
app.listen(3001, () => {
    console.log("running on port 3001");
});
