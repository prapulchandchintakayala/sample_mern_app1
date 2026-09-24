let express = require('express');
let router=express.Router();
let{users}=require('../models/users');
let{tasks}=require('../models/tasks');

router.get("/viewemployees",async (req, res) => {
    let result=await users.find();
    res.send(result);
});

router.post("/assign_task", async (req, res) => {
    let data=req.body;
    let newtask=new tasks(data);
    let result=await newtask.save();
    res.send(result);
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
router.delete("/deleteemployee/:id", async (req, res) => {
    let result = await users.findByIdAndDelete(req.params.id);

    if (result) {
        res.send("employee deleted success");
    } else {
        res.send("no user found");
    }
});

// REGISTER HR
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const newUser = new users({
            name,
            email,
            password,
            role
        });

        const result = await newUser.save();

        res.status(201).send({
            message: "HR registered successfully",
            user: result
        });

    } catch (error) {
        res.status(500).send({
            message: "Registration failed",
            error: error.message
        });
    }
});

module.exports=router;
