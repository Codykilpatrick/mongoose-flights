import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res){
  console.log(req.body);
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: "All Flights"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index
}