const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    idCompany: {
        type: mongoose.Types.ObjectId,
        ref: 'company',
        required: true
    },
    roles: [{
        type: mongoose.Schema.ObjectId,
        ref: 'role'
    }]
}, {collection: 'user'})
userSchema.plugin(timestamp)

module.exports = mongoose.model('User', userSchema)