// // import dotenv from 'dotenv';
// const express = require("express");
// const app = express();
// const cors= require('cors');
// const bodyParser=require('body-parser');
// const mysql = require("mysql");
// var cryptr = require('cryptr');
// const { urlencoded } = require("body-parser");
// const registerRouter= require("./routes/registerRouter");

// const http = require("http");
// require("dotenv").config()
// const host = process.env.host;
// const user = process.env.user;
// const database = process.env.database;
// const pass = process.env.password;
// console.log({host,user,database,pass})
// // console.log(pass);


// // dotenv.config();
// // console.log(process.env);


// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAZCbtvTEumY3DrqnfkMFDCVVf38QbcoO8",
// //   authDomain: "teezigner-d0353.firebaseapp.com",
// //   projectId: "teezigner-d0353",
// //   storageBucket: "teezigner-d0353.appspot.com",
// //   messagingSenderId: "533468635228",
// //   appId: "1:533468635228:web:73d557f3db18bf24308699",
// //   measurementId: "${config.measurementId}"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // var port = process.env.database;//use PORT env variable
// // console.log(port)

// const db = mysql.createPool({
//     host,
//     user,
//     pass,
//     database
// });
// console.log(db)

// app.use(express.json());
// app.use("/api/register_customer",registerRouter);
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));


// app.post("/api/login",(req,res)=>{
//     var email=req.body.email;
//     var password=req.body.password;   
//     db.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
//       if (error) {
//           res.json({
//             status:false,
//             message:'there are some error with query'
//             })
//       }
//       else{
//         if(results.length >0){
//             decryptedString = cryptr.decrypt(results.password);
//             if(password==decryptedString){
//                 res.json({
//                     status:true,
//                     message:'successfully authenticated'
//                 })
//             }else{
//                 res.json({
//                   status:false,
//                   message:"Email and password does not match"
//                  });
//             }
          
//         }
//         else{
//           res.json({
//               status:false,    
//             message:"Email does not exits"
//           });
//         }
//       }
//     });

// })

// app.get("/api/get_allProducts", (req,res)=>{
//     const sqlSelect = "Select * from product";
//     db.query(sqlSelect,(err,result)=>{
//         res.send(result);
//     });
// })

// // app.get("/api/get_allProducts", (req,res)=>{
// //     const sqlSelect = "Select * from product where product_id=";
// //     db.query(sqlSelect,(err,result)=>{
// //         res.send(result);
// //     });
// // })
// app.listen(3001, () => {
//     console.log("running on port 3001");
// });

// // export default db;


const express = require('express');
app = express();
var db = require('./Db');
console.log(db);
const router = express.Router();

router.post('/home', (req, res) => {
    try {
        const param = req.body;
        const sql = `select * from vendor`;

        console.log(db.query(sql, (err, data) => {
            if (err) throw new SyntaxError(err);
            res.status(200).json({ 'auth': true, 'data': data });
        }));
    } catch (err) {
        res.status(400).json({ 'auth': false, 'data': err.message });
    }
});
app.listen(3001, () => {
    console.log("running on port 3001");
});