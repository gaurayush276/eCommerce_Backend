const { Schema, model, mongo, default: mongoose } = require("mongoose");

const categorySchema = new Schema ({
  value : { type : String , required : true , unique : true } , 
  label : { type : String , required : true, unique : true } , 
  checked : { type : Boolean , required : true  , unique : true } , 
  

})


const virtual  = categorySchema.virtual('id') ; 
virtual.get(function (){
    return this._id ; 
})

categorySchema.set('toJSON' , {
    virtuals : true ,
    versionKey :false ,
    transform :function (doc , ret ){delete ret._id } 
})


exports.Category = mongoose.model( "Product Category" , categorySchema ) ; 