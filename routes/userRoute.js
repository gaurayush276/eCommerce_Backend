const express = require("express")  ;
const {  updateUser, fetchUserByID } = require("../Controller/userController");
  
const router = express.Router()  ;

router
 .patch('/' , updateUser) 
.get('/:id', fetchUserByID )  ; 

exports.router = router ; 