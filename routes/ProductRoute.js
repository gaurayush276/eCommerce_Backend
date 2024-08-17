const express = require("express")  ;
const { createProduct, deleteProduct, fetchALlProducts, fetchProductById, updateProduct } = require("../Controller/ProductController");

const router = express.Router()  ;

router
.post( '/'  , createProduct )
.delete( '/:id'  ,deleteProduct  ) 
.get('/' , fetchALlProducts )
.get('/:id' , fetchProductById )
.patch('/:id' , updateProduct) 


exports.router = router ; 