let express = require("express");

let app = express();
let hrroutes=require('./routes/hr_route');

app.use("/api/hr",hrroutes);
app.get("/api/hr",viewtasks);
app.get("/api/hr",viewemployees);





// Run the server
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
