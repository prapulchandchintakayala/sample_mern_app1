let express = require('express');
let router=express.Router();
//localhost:3000/api/emp/register   
router.post("/register", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

router.post("/login", (req, res) => {
    res.send("login route");
})
 
router.get("/viewtask", (req, res) => {
    res.send("view task route");
})

router.put("/updatestatus", (req, res) => {
    res.send("update status route");
})

module.exports=router;