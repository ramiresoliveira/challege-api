const mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp')

const stepSchema = new mongoose.Schema({
    idCompany: {
        type: mongoose.Types.ObjectId,
        ref: 'company',
        required: true
    },
    idFlow: {
        type: mongoose.Types.ObjectId,
        ref: 'flow',
        required: true
    },
    idNextStep: {
        type: mongoose.Types.ObjectId,
        ref: 'step'
    },
    type: {
        type: String,
        enum: ['popover', 'modal', 'hotspot', 'video', 'notification']
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    innerText: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'step'})
stepSchema.plugin(timestamp)

module.exports = mongoose.model('step', stepSchema)