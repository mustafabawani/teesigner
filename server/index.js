const express = require("express");
const app = express();
const cors= require('cors');
const bodyParser=require('body-parser');
const mysql = require("mysql");
const { urlencoded } = require("body-parser");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tees",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/get", (req,res)=>{
    const sqlSelect = "Select * from product";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
app.post("/api/insert", (req, res) => {
    const product_ID= req.body.product_ID;
    const productName=req.body.productName;
    const discount= req.body.discount;
    const unit_price=req.body.unit_price;
    const sqlInsert = 
    "INSERT INTO product (product_id,picture_url,discount,unit_price) VALUES (?,?,?,?);";
    db.query(sqlInsert,[product_ID,productName,discount,unit_price],(err,result)=>{

        res.send("inserted")

    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});