import { Meal } from "../models/meal.js"

function newMeal(req, res){
  console.log("We tried");
  res.render('meals/new', {
    title: "Add Meal",
    
  })
}

export {
  newMeal as new
}