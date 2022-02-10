const express = require('express')
const app = express()
const port = 8085
const cors = require('cors')

app.use(cors())
app.use('/api/v2/authen/', require('./api_authen'))
app.use('/api/v2/stock/', require('./api_stock'))

app.listen(port, () => {
  console.log(`Backed is ready on port : ${port}`)
})
