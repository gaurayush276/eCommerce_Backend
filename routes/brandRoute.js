
const express = require("express")  ;
 const { fetchBrands, createBrand } = require("../Controller/brandController");

const router  = express.Router();


router
.get('/',  fetchBrands )
.post('/createBrand',  createBrand)


exports.router = router  ; 