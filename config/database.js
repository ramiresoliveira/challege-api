const mongoose = require('mongoose')
const DATABASEURI = process.env.DATABASEURI
mongoose.Promise = global.Promise

module.exports = function() {
    let connection = mongoose.connect(DATABASEURI, {useNewUrlParser: true})
    
    mongoose.connection.on('connected', () => {
        console.log('Mongoose! Conectado ' );
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose! Desconectado' );
    })
    mongoose.connection.on('error', (erro) => {
        console.log('Mongoose! Erro na conexão: ' + erro);
    })

    return connection
}