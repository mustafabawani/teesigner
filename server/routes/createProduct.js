const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
var cloudinary=require('../cloudinary')
router.route("/").post((req, res) => {
    try{
    return new Promise(function (resolve, reject) {
        const ProductName=req.body.productName;
        const ProductDesc=req.body.productDesc;
        const unit_price=parseInt(req.body.unit_price);
        const picture_url = req.body.picture_url;
        const vendor_id=parseInt(req.body.vendor_id);
        const category_id='c1';
        console.log([ProductName,ProductDesc,picture_url,unit_price,vendor_id,category_id]);
        const sqlInsert="INSERT INTO product (product_name,product_desc,picture_url,unit_price,vendor_id,category_id) VALUES (?,?,?,?,?,?);";
                db.query(sqlInsert,[ProductName,ProductDesc,picture_url,unit_price,vendor_id,category_id],(err,result)=>{
                    console.log('in');
                    if (err) {
                        res.json({
                            status:false,
                            message:'there are some error with query'
                        })
                    }
                });
                res.json({
                    status:true,
                    message:'product created'
                })
            });
        }
            catch (err){
                console.log(err);
            }

});

module.exports = router;
