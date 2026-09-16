let express=require('express');
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
router.post("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
router.delete("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
