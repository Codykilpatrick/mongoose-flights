import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res){
  console.log("We create");
}

export {
  newFlight as new,
  create
}