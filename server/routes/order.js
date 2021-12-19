const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/").post((req, res) => {
    try{
    const customer_id=req.body.customer_id;
    const products=req.body.products;
    const quantity=req.body.quantity;
    const total=req.body.total;
    var quantityPerProduct=0;
    var unit_price=0;
    console.log(customer_id,products,quantity,total);
    // console.log(req.readableAborted.products);
    db.query("insert into orders(total_price,no_of_items) values(?,?);",[total,quantity], function (err, results1, fields) {
    });
        for(i=0;i<quantity;i++){
        db.query("insert into product_order values(?,(SELECT order_id FROM orders WHERE order_id = @@Identity));",[products[i].product.product_id], function (err, results2, fields) {
        });}
            
        db.query("insert into customer_order values(?,(SELECT order_id FROM orders WHERE order_id = @@Identity));",customer_id, function (err, results3, fields) {
        });
                db.query("insert into shipment(status,order_id,shipment_date) values('pending',(SELECT order_id FROM orders WHERE order_id = @@Identity),ADDDATE(current_date(), 10));", function (err, results4, fields) {
                });

                    for(i=0;i<quantity;i++){
                        quantityPerProduct=products[i].quantity;
                        unit_price=products[i].product.unit_price;
                        db.query("Select vendor_id from product where product_id=?;",[products[i].product.product_id], function (err, results5, fields) {

                                db.query("update vendor set earned=(earned+?) where vendor_id=?;",[quantityPerProduct*unit_price*0.4,results5[0].vendor_id], function (err, results6, fields) {
                                });
                            });
                    }
                    res.json({
                        status:true,
                        message:'Order Placed Sucessfully'
                    })
                }catch (err){
                    console.log(err);
                }
});

module.exports = router;