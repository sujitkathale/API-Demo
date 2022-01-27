const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("employee", employeeSchema);