const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = function() {
    let connection = mongoose.connect('mongodb://localhost:27017/challengeApi', {useNewUrlParser: true})
    
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