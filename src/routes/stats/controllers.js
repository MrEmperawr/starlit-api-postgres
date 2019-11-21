const { pool } = require('../../../config')

const getAllStats = async (request, response) => {
    try {
        const characters = await pool.query('SELECT COUNT (id) FROM characters')
        const userCount = await pool.query('SELECT COUNT (id) FROM users')
        console.log(characters, userCount)


        response.status(200).send('PLACEHOLDER')
    } catch (error) {
        response.status(400).send('Something went wrong!')
    }
    // pool.query('SELECT * FROM users', (error, results) => {
    //     if (error) response.status(400).send(JSON.stringify(error))
    //     response.status(200).send(results.rows)
    // })
}

module.exports = {
    getAllStats,
}