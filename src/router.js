const Router = require('router')
const router = new Router()
const toJson = require('./to-json')
const generateTrendingGraph = require('./trending-graph/data')
const debug = require('debug')('fakers:routes')

router.get('/', (req, res)=> {
  toJson(res, { message: 'server is up' })
})

router.get('/trending-graph/:typeX/:typeY/:unit', (req, res)=> {
  debug('req.quyer', req.params)
  const {params} = req
  toJson(res, generateTrendingGraph(params.typeX, params.typeY, params.unit))
})

module.exports = router

