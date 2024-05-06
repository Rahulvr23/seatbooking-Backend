const mongoose=require("mongoose")
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then((res)=>{
    console.log("connection establised");
}).catch((err)=>{
    console.log(err);
})