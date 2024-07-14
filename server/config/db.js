const mongoose = require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);  
        console.log("Database is Connected")

    }catch(error){
        throw(error)
    }
}
module.exports=connectDB;