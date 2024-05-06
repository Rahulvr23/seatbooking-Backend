const Seats=require("../Model/seatsSchema")
const SeatData=require('../Model/SeatdataSchema')
const  BookedSeats=require('../Model/BookedSeat')

  

exports.bookseats=async(req,res)=>{
    console.log("inside booking");
    const{seats, bookingid}=req.body
    const{movie}=req.params
    const booking=await BookedSeats.find()
console.log(booking);
console.log(seats,movie,bookingid);
const newbooking=await BookedSeats({
    movie,seats,bookingid
})
await newbooking.save()
res.status(200).json("booking done")


}


exports.disablesSeats=async(req,res)=>{
    const{movie}=req.params
    console.log(movie);
    const booking=await BookedSeats.find({  movie:`${movie}`})
    console.log(booking);
  try {
    let allSeats = [];

    // Loop through each object in the array
    booking.forEach(obj => {
      // Concatenate the seats array of the current object to the allSeats array
      allSeats = allSeats.concat(obj.seats);
    });
    res.status(200).json(allSeats)
  } catch (error) {
    res.status(500).json(err.message)
  }
    
}









exports.getSeats=async(req,res)=>{
    const {movieName}=req.params
    
   


// const newSeatBooking
const seats= await SeatData.find({    movie: `${movieName}`})
try {
    if(seats){
        res.status(200).json(seats  )
    }
    else{
        res.status(401).json("no movie found"  )
    }
} catch (error) {
    res.status(500).json(err.message)
}

}


exports.userticketbookings=async(req,res)=>{
    const{  bookingid}=req.params
    console.log(bookingid);
    const booking=await BookedSeats.find({ bookingid:`${ bookingid}`})
    console.log(booking);
    try {
        if (booking) {
            res.status(200).json(booking)
            
        } else {
            res.status(401).json('no movie found')
        }
        
    } catch (error) {
        res.status(500).json(err.message)
    }

}












// exports.seatBooking=async (req,res)=>{
      

//     const { seat_number, movie,status, price,bookingid}=req.body
//     const{bid}=req.params
//     console.log(bid);
// try {
//     const updateBooking=await SeatData.findByIdAndUpdate({_id:bid},{seat_number, movie,status, price,bookingid})
  
//     await updateBooking.save()
//     res.status(200).json("success")
  
// } catch (error) {
//     res.status(500).json("Internal server Error"+error.message);  
// }

// }


exports.listingbookings=async(req,res)=>{
    const{id}=req.params
console.log(req.body);
    console.log(id);

    try {
        const userbooking=await SeatData.find({bookingid:`${id}`})
        console.log(userbooking);

        if (userbooking) {
             res.status(200).json(userbooking)
        } else {
            res.status(401).json("no user bookings")

        }

    } catch (error) {
        res.status(500).json("Internal server Error"+error.message);  
    }
}