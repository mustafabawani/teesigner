const express= require("express");
const router=express.Router();
var cryptr = require('cryptr');
var db=require("../index")
router.route("/").post((req, res) => {
    const name= req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    // const encryptedPassword= cryptr.encrypt(req.body.password);
    const location=req.body.location;
    // console.log(name,email);
    const sqlInsert = 
    "INSERT INTO customer (name,email,password,location) VALUES (?,?,?,?);";
    db.query(sqlInsert,[name,email,password,location],(err,result)=>{

        if (error) {
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
});

module.exports = router;
