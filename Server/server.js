const express = require('express')
const app = express()
const port = 3000
const db = require('./Database');

db.dbFunc();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fuckyou', (req, res) => {
  res.send('fuck you too');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})