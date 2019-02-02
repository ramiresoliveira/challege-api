const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    idOwner: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    }

},{ collection: 'company' })
companySchema.plugin(timestamp)

module.exports = mongoose.model('Company', companySchema)