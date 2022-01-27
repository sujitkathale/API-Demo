const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/mongocruds";
async function connectDB(){
    try{
        await mongoose.connect(db, {useNewUrlParser: true});
        console.log('MongoDB Connected');
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports=connectDB;