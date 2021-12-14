const express= require("express");
const router=express.Router();
var cryptr = require('cryptr');
var app = express();
var db = require('../Db');

router.route("/").post((req, res)=>{
    var email=req.body.email;
    var password=req.body.password;   
    console.log("in");
    db.query('SELECT * FROM customer WHERE email = ? AND password=?;',[email,password], function (error, results, fields) {
        console.log(results.email,results.password);
        console.log(results);
    if(results.length >0){
        console.log("noice");}
        else{
            console.log("off");
        }
//         decryptedString = cryptr.decrypt(results.password);
        // if(password==results.password){
        //     console.log("logged in");
        // }else{
        //         console.log("logout");
        //     }
//             res.json({
//                 status:true,
//                 message:'successfully authenticated'
//             })
//         }else{
//             res.json({
//               status:false,
//               message:"Email and password does not match"
//              });
//         }
        
    // }
    // else{
    //   res.json({
    //       status:false,    
    //     message:"Email does not exits"
    //   });
    });
});
module.exports = router;
