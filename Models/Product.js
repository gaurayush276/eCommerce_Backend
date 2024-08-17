const { Schema, model, mongo, default: mongoose } = require("mongoose");

const ProductSchema = new Schema ({
  title : { type : String , required : true  , unique :true 
  } , 
  description : { type : String , required : true } , 
  price : { type : String , required : true } , 
  discountPercentage : { type : String , required : true } , 
  rating : { type : String , required : true } , 
  stock : { type : String , required : true } , 
  brand : { type : String , required : true } , 
  category : { type : String , required : true } , 
  thumbnail : { type : String , required : true } , 
  images : { type : [String] , required : true } , 
  

})


const virtual  = ProductSchema.virtual('id') ; 
virtual.get(function (){
    return this._id ; 
})

ProductSchema.set('toJSON' , {
    virtuals : true ,
    versionKey :false ,
    transform :function (doc , ret ){delete ret._id } 
})


exports.Product = mongoose.model( "Product" , ProductSchema ) ; 