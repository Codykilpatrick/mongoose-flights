import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'

const router = Router()

router.get('/', flightCtrl.index)

// localhost:3000/flights/new
router.get('/new', flightCtrl.new)

// localhost:3000/flights/:id
router.get('/:id', flightCtrl.show)

// localhost:3000/flights
router.post('/', flightCtrl.create)

// localhost:3000/flights/:id
router.delete('/:id', flightCtrl.delete)

export {
  router
}
