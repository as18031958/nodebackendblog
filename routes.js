const routes = require("express").Router()
// const app = express()
const {data}=require('./data')

routes.get('/blog',data)
module.exports = {routes}