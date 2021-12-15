const express = require('express');
var app = express();
var db = require('./Db');
const cors= require('cors');
const bodyParser=require('body-parser');
const { urlencoded } = require("body-parser");
const registerRouter= require("./routes/registerRouter");
const loginUser=require("./routes/loginUser");
const showAllProduct=require("./routes/showAllProducts");
const getOneProduct=require("./routes/getOneProduct");
// const try2=require('./routes/registerRouter');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/register_customer",registerRouter);
app.use("/loginUser",loginUser);
app.use("/showAllProducts",showAllProduct);
app.use("/getOneProduct",getOneProduct);
app.listen(3001, () => {
    console.log("running on port 3001");
});
