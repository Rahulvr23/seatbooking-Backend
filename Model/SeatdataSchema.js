const mongoose=require('mongoose')
const seatdataSchema=new mongoose.Schema({
    seat_number: {
        type: String,
        required: true,
        
    },
    movie: {
        type: String,
        required: true,
        
    },
    status: {
        type: Number,
        required: true,
       
    },
    price: {
        type: Number,
        required: true
    },
    bookingid: {
        type: String,
        required: true
    }



})

const SeatData=mongoose.model("SeatData",seatdataSchema)
module.exports=SeatData