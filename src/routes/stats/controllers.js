const { pool } = require('../../../config')

const getAllStats = async (request, response) => {
    try {
        const characters = await pool.query('SELECT COUNT (id) as characterCount FROM characters')
        const userCount = await pool.query('SELECT COUNT (id) as userCount FROM users')
        const heritageDistribution = await pool.query('SELECT COUNT (cultural_heritage), cultural_heritage FROM characters GROUP BY cultural_heritage')
        const archetypeDistribution = await pool.query('SELECT COUNT(archetype), archetype FROM characters GROUP by archetype')
        const backgroundDistribution = await pool.query('SELECT COUNT(background), background FROM characters GROUP by background')
        const characterPerUser = await pool.query('SELECT COUNT (name) as character_count, user_id FROM characters GROUP BY user_id')
        
        const stats = [
            ...characters.rows, 
            ...userCount.rows, 
            ...heritageDistribution.rows, 
            ...archetypeDistribution.rows, 
            ...backgroundDistribution.rows,
            ...characterPerUser.rows
        ]

        response.status(200).send(stats)
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