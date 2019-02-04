const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const trackSchema = new mongoose.Schema({
    action: {
        type: String,
        enum: ['Create', 'Edit', 'Remove'],
        required: true
    },
    object: {
        type: String,
        enum: ['Company', 'Role', 'FLow', 'Step', 'User'],
        required: true
    }
}, {collection: 'track'})
trackSchema.plugin(timestamp)

module.exports = mongoose.model('Track', trackSchema)