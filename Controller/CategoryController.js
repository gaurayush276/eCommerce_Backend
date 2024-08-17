const { Category } = require("../Models/category")


exports.createCategory = async ( req , res )=>{
    const category = new Category(req.body) ; 
    const response = await category.save() ; 
    console.log( response ) ; 
    res.json( response ) ;  

}

exports.fetchAllCategory = async ( req, res )=>{
    const categories =await Category.find() ; 
    res.json( categories ) ; 
}