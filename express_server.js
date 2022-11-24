const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(JSON.stringify({ status: "Running on express" }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})