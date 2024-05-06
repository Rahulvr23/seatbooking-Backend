const jwt=require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
const token=req.headers['authorization']?.slice(7)
console.log(token);
try {
    console.log("jwt");
    const tockenVerification=jwt.verify(token,"superkey2024")
    console.log(tockenVerification);
    console.log("inside jwt");
    next();
} catch (error) {
    res.status(401).json("Authorization failed....please login again...",)
}
}
module.exports = jwtMiddleware
