const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const adminRoute= require("./routes/adminRoutes");
const bodyparser = require('body-parser');
const port =process.env.PORT ||8000;
const MNDB=process.env.MGCONN;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


mongoose.connect(MNDB).then(()=>{
    console.log("DB connected!");
})

app.use("/admin", adminRoute);



app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})