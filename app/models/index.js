const db = require('../config/db.config.js');
const Usuario = require('./user.model.js');
const Bootcamp = require('./bootcamp.model.js');

Usuario.belongsToMany(Bootcamp, {through:'User_Bootcamp'}) 
Bootcamp.belongsToMany(Usuario, {through:'User_Bootcamp'})

try {
    db.sync()
} catch(err) {
    console.log(err);
}

module.exports = { Usuario, Bootcamp }