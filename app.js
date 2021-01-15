const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World from Sumana App!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("This is an example for node-express.")
  })
  
  app.get('/contact', (req, res) => {
    res.send("Contact me on s538360@nwmissouri.edu")
  })
  
  app.get('/help', (req, res) => {
    res.send(`For any further queries..contact Sumana`)
  })

  app.get('/help/:topic', (req, res) => {
    res.send(`Your help will arrive soon for ${req.params.topic}`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

