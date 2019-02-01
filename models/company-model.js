const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }

},{ collection: 'company' })
companySchema.plugin(timestamp)

module.exports = mongoose.model('Company', companySchema)