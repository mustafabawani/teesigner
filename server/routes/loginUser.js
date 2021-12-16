const express= require("express");
const router=express.Router();
var cryptr = require('cryptr');
var app = express();
var db = require('../Db');

router.route("/").post((req, res)=>{
    var email=req.body.email;
    var password=req.body.password;   
    console.log("in");
    db.query('SELECT * FROM customer WHERE email = ? AND password=?;',[email,password], function (err, results, fields) {
        if (err) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }
        else{
            if(results[0].password){
              res.json({
                status:true,
                message:'user logged in sucessfully',
                name: results[0].name,
                location: results[0].location
              })
          }
          else{
            res.json({
                status:true,
                message:'password is incorrect',
              })
          }
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
