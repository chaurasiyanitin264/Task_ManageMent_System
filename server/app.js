const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const adminRoute= require("./routes/adminRoutes");
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


mongoose.connect("mongodb://127.0.0.1:27017/TaskManagement").then(()=>{
    console.log("DB connected!");
})

app.use("/admin", adminRoute);



app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})