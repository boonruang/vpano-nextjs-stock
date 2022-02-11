const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8085
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/uploaded'))
app.use(cors())

app.use('/api/v2/authen/', require('./api_authen'))
app.use('/api/v2/stock/', require('./api_stock'))

app.listen(PORT, () => {
  console.log(`Backed is ready on port : ${PORT}`)
})
