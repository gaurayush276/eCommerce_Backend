const { User } = require("../Models/user");

exports.createUser = async( req , res)=>{
    const user = new User(req.body) ;
    await user.save().exec() ; 
    res.json(user) ; 
}
