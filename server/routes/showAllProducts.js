const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/").get((req, res) => {
    const sqlSelect = "Select * from product";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });    

    });
module.exports = router;
