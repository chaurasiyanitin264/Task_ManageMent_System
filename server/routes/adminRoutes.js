const express=require("express");
const route=express.Router();
const AdminController=require("../controller/adminController")
route.post("/admindata",AdminController.adminLogin)
route.post("/usercreate",AdminController.UserCreate)
route.get("/assigntaskdisplay",AdminController.TaskReceve)
route.post("/assigntask",AdminController.AssignTask);
module.exports=route;