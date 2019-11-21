const { pool } = require('../../../config')

const getAllUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) response.status(400).send(JSON.stringify(error))
        response.status(200).send(results.rows)
    })
}

const getUserByID = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1',
     [id], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(results.rows)
    })
}

const getCharactersByUserID =  (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM characters JOIN users ON users.id = characters.user_id WHERE users.id = $1',
     [id], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(results.rows)
    })
}

const addNewUser = (request, response) => {
    const { name, email, userName} = request.body

    pool.query('INSERT INTO users (name, email, user_name) VALUES ($1, $2, $3)',
     [name, email, userName], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(`Successfully added the new user: ${name}, ${email}, ${userName}`)
    })
}

const deleteUser = (request, respone) => {
    const id = request.params.id

    pool.query('',
     [id], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(`Successfully deleted the user with ID: ${id}`)
    })
}

module.exports = {
    getAllUsers,
    getUserByID,
    getCharactersByUserID,
    addNewUser,
    deleteUser,
}