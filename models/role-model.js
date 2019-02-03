const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const roleSchema = new mongoose.Schema({
    idCompany :{
        type: mongoose.Types.ObjectId,
        ref: 'company',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean
    }
}, {collection: 'role'})
roleSchema.plugin(timestamp)

module.exports = mongoose.model('Role', roleSchema)