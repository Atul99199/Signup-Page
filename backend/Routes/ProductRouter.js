const ensureAuthenticated = require("../middleware/Auth.js");

const router = require('express').Router();   

router.post('/',ensureAuthenticated, (req,res)=>{
    res.status(200).json([
        {
         name:"mobile",
         price:10000
        },
       {
         name:"tv",
         price:20000
        }
    ])
});


module.exports = router;