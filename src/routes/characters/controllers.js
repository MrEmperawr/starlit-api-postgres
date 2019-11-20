const { pool } = require('../../../config')

const getAllCharacters = (request, response) => {
    pool.query('SELECT * FROM characters', (error, results) => {
        if (error) response.status(400).send(JSON.stringify(error))
        response.status(200).send(results.rows)
    })
}

module.exports = {
    getAllCharacters,
}