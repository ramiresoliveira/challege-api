const mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp')

const viewerSchema = new mongoose.Schema({
    clientId: {
        type: String,
        unique: true
    },
    uuId: String,
    customFields: String,
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'viewer'})
viewerSchema.plugin(timestamp)

module.exports = mongoose.model('Viewer', viewerSchema)