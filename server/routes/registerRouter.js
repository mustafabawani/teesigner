const express= require("express");
const router=express.Router();
var bcrypt = require('bcrypt');
var app = express();
var db = require('../Db');
router.route("/").post((req, res) => {
    try{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const location=req.body.location;
    
    if(name && email && password && location){
        db.query('SELECT * FROM customer WHERE email = ?',[email], function (err, results, fields) {
            if(!results[0]){
                const salt = bcrypt.genSaltSync(10);
                // const hash = bcrypt.hashSync("generic", salt);
                const encryptedPassword=bcrypt.hashSync(password, salt);
                console.log(encryptedPassword);
                const sqlInsert = 
                "INSERT INTO customer (name,email,password,location) VALUES (?,?,?,?);";
                db.query(sqlInsert,[name,email,encryptedPassword,location],(err,result)=>{
                    db.query("SELECT customer_id FROM customer WHERE customer_id = @@Identity",(err,results)=>{
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
                });
                
            }else{
                res.json({
                    status:false,
                    message:'Email already exists'
                })
            }
        });
    }
    else{
        res.json({
            status:false,
            message:'Invalid Input'
        })
    }
}catch (err){
    console.log(err);
}
});

module.exports = router;