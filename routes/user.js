const {postdata,getdata,deletedata,putdata} = require('../controller/empController');
const express= require('express')
const router = express.Router();
router.get("/get",(req,res)=>{
    res.send(getdata());
})
router.post("/post",(req,res)=>{
    postdata(req.body)
    res.send("data Added");
})
router.delete("/del/:email",(req,res)=>{
    deletedata(req.params.email)
    res.send("Data deleted");
})
router.put("/put/:email",(req,res)=>{
    putdata(req.params.email, req.body)
    res.send("Data updated");
})

module.exports = router;