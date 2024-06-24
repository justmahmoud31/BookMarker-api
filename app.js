const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const linksRoute = require('./Routes/link.Route.js');
const app = express();
// middle wares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Routes
app.use('/api/v1/links',linksRoute);
app.get('/',(req,res)=>{
  res.send("Hello!");
})
mongoose
  .connect(
    "mongodb+srv://justmahmoud:Mahmoud%403152003@linkcluster.qkts1qx.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("Failed through the ", err);
  });
//start the server 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
