const express= require("express");
const router=express.Router();
var bcrypt = require('bcrypt');
var app = express();
var db = require('../Db');

router.route("/:id").delete((req, res)=>{
  try{
  var id=parseInt(req.params.id);
  console.log(id);
  var querry='Delete FROM product WHERE product_id = ?;';
  console.log("delete");
  db.query(querry,id, function (err, results, fields) {
      if (err) {
        res.json({
          status:false,
          message:'there are some error with query',
          })
    }else{
      console.log("finally");
        res.json({
            status:false,
            message:'Product Deleted successfully',
        })
    }
      
  });
}catch (err){
  console.log(err);
}
});
module.exports = router;
