import { Router } from 'express'

const router = Router()

/* GET users listing. */
router.get('/new', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
