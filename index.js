const express = require('express')
const bodyParser = require('body-parser')

const { getAllCharacters, getCharacterByID, deleteCharacter } = require('./src/routes/characters')
const { getAllUsers, getUserByID, getCharactersByUserID, addNewUser, deleteUser } = require('./src/routes/users')
const { getAllStats } = require('./src/routes/stats')

const PORT = 3002
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(`/`, (request, response) => {
  response.send('Test round for Starlit DB using PostGres! Look up users and characters around here! Also find stats and such!')
});

app
  .route('/users')
  .get(getAllUsers)
  .post(addNewUser)

app
  .route('/users/:id')
  .get(getUserByID)
  .put()
  .delete(deleteUser)

app
  .route('/characters')
  .get(getAllCharacters)

app
  .route('/users/characters/:id')
  .get(getCharactersByUserID)

app
  .route('/characters/:id')
  .get(getCharacterByID)
  .delete(deleteCharacter)

app
  .route('/statistics')
  .get(getAllStats)

app.listen(PORT, () => console.log(`The Server is up and running on port ${PORT}`))