const { Product } = require("../Models/Product")

exports.createProduct = async (req,res)=>{
    const product = new Product(req.body) ; 
    const response = await product.save() ; 
    console.log( response ) ; 

    res.json( response ) ; 

}  ;


exports.fetchALlProducts = async(req , res )=>{
    // const date= new Date() ; 
    // console.log("backend " , date.getUTCMilliseconds()) ; 
    let query = Product.find() ;
    // let totalProductQuery = Product.find() ; 
 
    if ( req.query.category ){
        query = query.find( { category : req.query.category })
        // totalProductQuery = totalProductQuery.find( { category : req.query.category })
    } 
    if ( req.query.brand ){
        query = query.find( { brand : req.query.brand })
        // totalProductQuery = totalProductQuery.find( { brand : req.query.brand })
    }
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order });
        // totalProductQuery = totalProductQuery.sort({ [req.query._sort]: req.query._order });
        // console.log( {  [req.query._sort]: req.query._order } ) ; 
      }
   
     
    try {
        
        const docs = await query.exec();
         res.status(200).json(docs);
      } catch (err) {
        res.status(400).json(err);
      }
    
}
 

exports.deleteProduct = async (req,res)=>{
        const id  = req.params.id ; 
        const data = await Product.findOneAndDelete( {_id : id } ) ;
        res.json() ;
    
}  ;


exports.fetchProductById = async( req, res )=>{
    const id = req.params.id ; 
    const data = await Product.findById(id) ; 
    res.json( data ) ; 
}


exports.updateProduct = async ( req , res)=>{
    const id = req.params.id ; 
      const data = await Product.findByIdAndUpdate( id , req.body , { new : true } ) ; 
      res.json(data) ; 
}