const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    title:String,
    description:String,
    duration:Number,
    empid:{ type: mongoose.Types.ObjectId, ref: "UserCreated"}
})
module.exports=mongoose.model("task",taskSchema);