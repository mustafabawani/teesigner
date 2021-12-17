const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
var cloudinary=require('../cloudinary')
router.route("/").post((req, res) => {
    console.log("in");
        const product_id=req.body.product_id;
        const ProductName=req.body.ProductName;
        const ProductDesc=req.body.ProductDesc;
        const unit_price=req.body.unit_price;
        const fileStr = req.body.data;
        const vendor_id=localStorage.getItem('id');
        console.log(vendor_id);
        const uploadResponse = cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        const sqlInsert="INSERT INTO customer (product_id,product_desc,product_name,unit_price,picture_url,vendor_id) VALUES (?,?,?,?,?);";
                db.query(sqlInsert,[product_id,ProductDesc,ProductName,unit_price,uploadResponse.url,vendor_id],(err,result)=>{
                    if (err) {
                        res.json({
                            status:false,
                            message:'there are some error with query'
                        })
                    }
                });
});

module.exports = router;
