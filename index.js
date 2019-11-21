const express = require('express')
const bodyParser = require('body-parser')

const { getAllCharacters, getCharacterByID } = require('./src/routes/characters')
// const {  } = require('./routes/characters')
// const {  } = require('./routes/stats')

const PORT = 3002
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(`/`, (request, response) => {
  response.send('Test round for Starlit DB using PostGres! Look up users and characters around here! Also find stats and such!')
});

// app
//   .route('/users')
//   .get()
//   .post()

// app
//   .route('/users/:id')
//   .get()
//   .put()
//   .delete()

app
  .route('/characters')
  .get(getAllCharacters)

app
  .route('/characters/:id')
  .get(getCharacterByID)

// app
//   .route('/stats')
//   .get()

// app
//   .route('/stats/reviews/positive')
//   .get()

app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))