const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
var cloudinary=require('../cloudinary')
router.route("/").post((req, res) => {
    try{
    return new Promise(function (resolve, reject) {
    console.log("in");
        const product_id=parseInt(req.body.id);
        const ProductName=req.body.productName;
        const ProductDesc=req.body.productDesc;
        const unit_price=parseInt(req.body.unit_price);
        console.log(product_id,ProductDesc,ProductName,unit_price);
        const sqlInsert="UPDATE product set product_name= ?,product_desc=?,unit_price=? where product_id=?;";
                db.query(sqlInsert,[ProductName,ProductDesc,unit_price,product_id],(err,result)=>{
                    console.log('in');
                    if (err) {
                        res.json({
                            status:false,
                            message:'there are some error with query'
                        })
                    }
                });
            });
        }catch (err){
            console.log(err);
        }
});

module.exports = router;
