const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
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
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
