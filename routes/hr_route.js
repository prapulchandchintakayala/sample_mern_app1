let express = require("express");

let router = express.Router();

router.get("/viewemployees", (req, res) => {
    res.send("view employees route");
});

router.post("/assign_tasks", (req, res) => {
    res.send("assign tasks route");
});

router.get("/view_tasks", (req, res) => {
    res.send("view tasks route");
});

router.delete("/delete_tasks", (req, res) => {
    res.send("delete tasks route");
});

module.exports = router;
