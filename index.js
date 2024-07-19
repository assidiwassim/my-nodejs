const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! - hello bro')
})


app.get('/users', (req, res) => {
    res.send([])
  })


  app.get('/test', (req, res) => {
    res.send('this is a test ...')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})