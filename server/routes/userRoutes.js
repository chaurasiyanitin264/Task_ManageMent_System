const express=require("express");
const route=express.Router();
const UserController=require("../controller/userController")
route.post("/userlogin",UserController.userLogin);
// route.get("/usertaskdisplay",UserController.UserTaskdisplay)
route.post("/usertaskdisplay",UserController.UserTaskdisplay)
module.exports=route;