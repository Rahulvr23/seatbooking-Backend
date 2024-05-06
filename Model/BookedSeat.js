const mongoose=require('mongoose')
const newBooking=new mongoose.Schema({
    movie: {
        type: String,
        required: true,
        
    },
    seats: {
        type: [Number], 
        required: true
      }
    ,
    bookingid: {
        type: String,
        required: true
    }  

})
const BookedSeats=mongoose.model("BookedSeats",newBooking)
module.exports=BookedSeats