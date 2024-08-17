const express = require( "express") ; 
// const { PORT } = require("./constants");
const mongoose = require("mongoose") ; 
const { createProduct } = require("./Controller/ProductController");
const ProductRouter = require("./routes/ProductRoute")
const categoryRouter = require("./routes/categoryRoute")
const brandRouter = require("./routes/brandRoute")
const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authRoute")


const PORT = 8000 ; 
const server = express() ; 


server.use( express.json())  ;
server.use('/products' , ProductRouter.router) ; 
server.use('/category' , categoryRouter.router) ; 
server.use('/brands' , brandRouter.router) ; 
server.use('/users' , userRouter.router) ; 
server.use('/auth' , authRouter.router) ; 
main() ; 

async function main( ) {
    
   await mongoose.connect("mongodb+srv://gaurayush276:QLJlvSCZbJfzGT8m@cluster0.5s6gj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then( e => console.log("MongoDB Connected")).catch( e => console.log(e)) ; 
}


server.get('/' , (req ,res )=>{
     res.json({ Status : "Success "}) ; 
})


server.listen(PORT , ()=> console.log("server started at " + PORT ) ) ; 