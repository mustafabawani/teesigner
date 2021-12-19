const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/:id").get((req, res) => {
    try{
    const vendor_id=req.params.id;
    const sqlSelect = "Select * from vendor V where V.vendor_id=?;";
    db.query(sqlSelect,[vendor_id],(err,result)=>{
        res.send(result);
    });    
}catch (err){
    console.log(err);
}
    });
module.exports = router;