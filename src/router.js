const Router = require('router')
const router = new Router()
const toJson = require('./to-json')

router.get('/', (req, res)=> {
  toJson(res, { message: 'server is up' })
})

router.get('/', (req, res)=> {
  toJson(res, { message: 'server is up' })
})

module.exports = router

