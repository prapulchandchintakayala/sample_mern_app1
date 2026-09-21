let express = require('express');
let router=express.Router();
let{users}=require('../models/users');

router.get("/viewemployees",async (req, res) => {
    let result=await users.find();
    res.send(result);
});

router.post("/assign_tasks", (req, res) => {
    res.send("assign tasks route");
})

router.get("/view_tasks", (req, res) => {
    res.send("view tasks route");
})

router.delete("/deleteemployee/:id", async (req, res) => {
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted success");
    }else{
         res.send("no user found");

    }
   
})

module.exports=router;
