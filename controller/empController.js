const empModel = require('../db/employeeSchema')
async function getdata(){
    await empModel.find({}, (err, data)=>{
        if (err) throw err;
        return data;
    })
}
async function postdata(data){
    let ins= await new empModel(data);
    ins.save((err)=>{
        if (err) throw err;
    })
}
async function deletedata(email){
    await empModel.deleteOne({email:email}, (err)=>{
        if (err) throw err;
    })
}
async function putdata(email, data){
    console.log(data);
    console.log(email)
    await empModel.updateOne({email:email}, {$set: {email:data.email, name: data.name}}).exec((err)=>{
        if (err) throw err;
    })
}
module.exports = { getdata, postdata, deletedata, putdata };