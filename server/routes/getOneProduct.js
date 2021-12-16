const express= require("express");
const router=express.Router();
var app = express();
var db = require('../Db');
router.route("/:id").get((req, res) => {
    const product_id=req.params.id;
    db.query("Select * from product where product_id = ?",[product_id], function (error, result, fields) {
        res.send(result[0]);
    }); 
});   

module.exports = router;