const express = require('express')
const app = express()
const port = 8085

app.get('/', (req, res) => {
  res.json({ result: 'yes' })
})

app.listen(port, () => {
  console.log(`Backed is ready on port : ${port}`)
})
