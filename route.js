const express=require('express')
const UserController=require("../back-end/Controller/UserController")
const MovieController=require("../back-end/Controller/MovieController")
const seatsController=require("../back-end/Controller/seatsController")
const jwtMiddleware = require('./Middlewares/jwtmiddleware')
const router=new express.Router()


router.post('/register',UserController.register)
router.post('/login',UserController.Login)
router.get('/allmovie',MovieController.getMovies)
router.get('/getseats/:movieName',seatsController.getSeats)
// router.put("/book/:bid",jwtMiddleware,seatsController.seatBooking)
router.post("/newbooking/:movie",jwtMiddleware,seatsController.bookseats)
router.get("/disabled/:movie",seatsController.disablesSeats)
router.get('/mybooking/:bookingid',seatsController.userticketbookings)
module.exports=router