const AdminModel= require("../models/adminModels");


const adminLogin=async(req, res)=>{
    // const {userid, password} = req.body;
    // const Admin = await AdminModel.findOne({userid:userid});
    // console.log(Admin)
    const {userid, password} = req.body;
    // console.log(password)
    try {
        const Admin = await AdminModel.findOne({userid:userid});
        
        if (!Admin)
        {
            res.status(400).json({msg:"Invalid user Id"});
        }

        if(Admin.password!=password)
        {
            res.status(400).json({msg:"Invalid password"});
        }

        res.status(200).json(Admin)
    } catch (error) {
         console.log(error);
    }
      
}


module.exports ={
    adminLogin
}