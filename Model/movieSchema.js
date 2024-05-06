
const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
    Title:{
        type:String,
        require:true  
    },
    Year:{
        type:String,
        require:true  
    },
    Runtime:{
        type:String,
        require:true  
    },
    Poster:{
        type:String,
        require:true  
    }

})
const movieDetails=mongoose.model("movieDetails",movieSchema)
module.exports=movieDetails