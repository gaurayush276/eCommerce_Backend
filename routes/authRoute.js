const express = require("express")  ;
const { createUser } = require("../Controller/authController");
   
const router = express.Router()  ;

router
.post('/' , createUser) 
 

exports.router = router ; 