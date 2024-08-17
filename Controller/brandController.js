const { Brand } = require("../Models/brand");
 

exports.createBrand = async ( req , res )=>{
    const brand = new Brand(req.body) ; 
    const response = await brand.save() ; 
    console.log( response ) ; 
    res.json( response ) ;  

}

exports.fetchBrands = async ( req, res )=>{
   

    const brands =await Brand.find() ; 
    res.json( brands ) ; 
}