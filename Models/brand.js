const { Schema, model, mongo, default: mongoose } = require("mongoose");

const brandSchema = new Schema ({
  value : { type : String , required : true , unique : true } , 
  label : { type : String , required : true  , unique : true } , 
  checked : { type : Boolean , required : true  , unique : true } , 
  

})


const virtual  = brandSchema.virtual('id') ; 
virtual.get(function (){
    return this._id ; 
})

brandSchema.set('toJSON' , {
    virtuals : true ,
    versionKey :false ,
    transform :function (doc , ret ){delete ret._id } 
})


exports.Brand = mongoose.model( "Product Brand" , brandSchema ) ; 