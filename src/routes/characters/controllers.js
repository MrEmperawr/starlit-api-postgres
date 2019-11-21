const { pool } = require('../../../config')

const getAllCharacters = (request, response) => {
    pool.query('SELECT * FROM characters', (error, results) => {
        if (error) response.status(400).send(JSON.stringify(error))
        response.status(200).send(results.rows)
    })
}

const getCharacterByID = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM characters WHERE id = $1',
     [id], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(results.rows)
    })
}

const deleteCharacter = (request, response) => {
    const id = request.params.id

    pool.query('DELETE * FROM characters WHERE id = $id',
     [id], 
     (error, results) => {
         console.log(results)
        if (error) throw error
        response.status(200).send(results.rows)
    })
}

module.exports = {
    getAllCharacters,
    getCharacterByID,
    deleteCharacter
}