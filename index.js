const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! - test')
})


app.get('/users', (req, res) => {
    res.send([])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})