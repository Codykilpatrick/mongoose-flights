import { Flight } from "../models/flight.js"

function newFlight(req, res){
  const newFlight = new Flight()
  const defaultDeparts = newFlight.departs
  res.render('flights/new', {
    title: "Add Flight",
    defaultDate: defaultDeparts.toISOString().slice(0, 16),
  })
}

function create(req, res){
  console.log(req.body);
  for (const key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
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

function show(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: "Flight"
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
  index,
  show,
}