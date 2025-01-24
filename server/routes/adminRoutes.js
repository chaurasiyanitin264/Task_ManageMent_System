const express=require("express");
const route=express.Router();
const AdminController=require("../controller/adminController")
route.post("/admindata",AdminController.adminLogin)

module.exports=route;