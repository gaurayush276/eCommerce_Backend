

const express = require("express")  ;
const { createCategory, fetchAllCategory } = require("../Controller/CategoryController");

const router  = express.Router();


router
.get('/',  fetchAllCategory )
.post('/createCategory',  createCategory)


exports.router = router  ; 