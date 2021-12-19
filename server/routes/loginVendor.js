const express= require("express");
const router=express.Router();
var bcrypt = require('bcrypt');
var app = express();
var db = require('../Db');

router.route("/").post((req, res)=>{
  var email=req.body.email;
  var password=req.body.password;
  var querry='SELECT * FROM vendor WHERE email = ?';
  // console.log("here");
  db.query(querry,email, function (err, results, fields) {
   try{
    // console.log("in");
      if (err) {
        res.json({
          status:false,
          message:'there are some error with query',
          })
    }else{
      if(results[0].password){
          bcrypt.compare(password, results[0].password, function(err, ress) {
              if(!ress){
                  res.json({
                    status:false,                  
                    message:"Email and password does not match",
                  });
              }else{                    
                  res.json({
                      status:true,
                      id: results[0].vendor_id,
                      message:"Successfully Logged In",
                  })
              }
          });         
      }
      else{
        res.json({
          status:false,
          message:"Email does not exits",
        });
      }
    }
  }catch (err){
    console.log(err);
}});
});
module.exports = router;
