const express= require("express");
const router=express.Router();
var cryptr = require('cryptr');
var app = express();
var db = require('../Db');
router.route("/").post((req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    // const encryptedPassword=cryptr.encrypt(req.body.password);
    // console.log(encryptedPassword);

    const location=req.body.location;
    if(name && email && password && location){
    const sqlInsert = 
    "INSERT INTO customer (name,email,password,location) VALUES (?,?,?,?);";
    db.query(sqlInsert,[name,email,password,location],(err,result)=>{
        if (err) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }else{
              res.json({
                status:true,
                message:'user registered sucessfully'
            })
          }
        });
    }
    else{
        res.json({
            status:false,
            message:'invald input'
        })
    }
});

module.exports = router;
