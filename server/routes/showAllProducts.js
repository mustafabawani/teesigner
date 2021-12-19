const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/").get((req, res) => {
    try{
    const sqlSelect = "Select * from product";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });    
}catch (err){
    console.log(err);
}
    });
module.exports = router;
