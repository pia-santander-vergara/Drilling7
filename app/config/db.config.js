const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const db = new Sequelize('db_bootcamp', process.env.DB_USER, process.env.DB_PASSWD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
});

async function syncDB () {
  try {
    await db.authenticate()
    console.log('Connections has been established successfully');
  }
  catch(error) {
    console.error('Unable to connect to database', error)
  }
}
syncDB()

module.exports = db