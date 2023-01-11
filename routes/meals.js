import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// Localhost:3000/meals

// GET localhost:300/meals/new
router.get('/new', mealsCtrl.new)


export { 
  router
}