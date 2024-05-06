require ('dotenv').config()//loads .env file content into procees .env by default
const express=require('express')
const cors=require('cors')
const router = require('./route')
const db=require('./Connection/db')
const bserver=express()
bserver.use(cors())
bserver.use(express.json())
bserver.use(router)
const PORT=4000
bserver.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
 
bserver.get("/",(req,res)=>{
    res.send('<h1>project started</h1>')
})
