const users=require('../Model/userSchema')
const jwt=require('jsonwebtoken')
exports.register=async (req,res)=>{
    console.log("inside the register function");

    const { username,password}=req.body
    const existingUser=await users.findOne({username})
try {
    if(existingUser){
        res.status(401).json("User already exist")
    }

    else{
        const newUser=await users({
            username,password
        })
        await newUser.save()
        res.status(200).json("user reg sucess")
    }
} catch (error) {
    res.status(500).json("server error"+err.message)
}


}

exports.Login=async(req,res)=>{
  const{username,password}=req.body
  const validUser=await users.findOne({username,password})
  try {
    if(validUser){

        const token=jwt.sign({userId:validUser._id},"superkey2024")
        console.log("hi");
        console.log(token);
        console.log("hi");
        res.status(200).json({validUser,token})
    }
    else{
        res.status(401).json("Invalid Details")
    }
    
  } catch (error) {
    res.status(500).json(err.message)
  }
}