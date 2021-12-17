const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/:id").get((req, res) => {
    const vendor_id=req.params.id;
    const sqlSelect = "Select * from product P,Vendor V where P.vendor_id=V.vendor_id and V.vendor_id=?;";
    db.query(sqlSelect,[vendor_id],(err,result)=>{
        res.send(result);
    });    

    });
module.exports = router;
