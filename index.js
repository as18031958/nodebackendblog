const express= require('express')
const app = express()
const {routes} = require("./routes")
const cors = require('cors')

app.use(cors({
    origin:"*"
}))

app.use('/api', routes)

app.listen(5555)