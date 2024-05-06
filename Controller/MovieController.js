const movieDetails=require('../Model/movieSchema')
exports.getMovies=async(req,res)=>{
    const allmovies=await movieDetails.find()
    try {
        if(allmovies){
            res.status(200).json(allmovies)
        }
        else{
            res.status(200).json("no data found")
        }
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}