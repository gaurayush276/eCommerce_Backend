const { User } = require("../Models/user")



exports.fetchUserByID = async ( req, res ) =>{
        // the user.id will come from the frontend 
    const id = req.params.id ; 
    // only email addresses name will be shown 
    const data = await User.findById( id  , 'name email  id').exec() ; 
    res.json( data ) ; 
}
 
exports.updateUser = async( req , res)=>{
    // the user.id will come from the frontend 
    const id  = req.params.id ; 
    const data = await User.findByIdAndUpdate( id , rew.body , { new: true}).exec() ; 
    res.json( data ) ; 

}

 