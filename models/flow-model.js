const mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp')

const flowSchema = new mongoose.Schema({
    idCompany: {
        type: mongoose.Types.ObjectId,
        ref: 'company',
        required: true
    },
    idStarStep: {
        type: mongoose.Types.ObjectId,
        ref: 'step'
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'flow'})
flowSchema.plugin(timestamp)

module.exports = mongoose.model('Flow', flowSchema)