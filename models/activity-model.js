const mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp')

const activitySchema = new mongoose.Schema({
    idFlow: {
        type: mongoose.Types.ObjectId,
        ref: 'flow',
        required: true
    },
    idStep: {
        type: mongoose.Types.ObjectId,
        ref: 'step'
    },
    ownerViewer: {
        type: mongoose.Types.ObjectId,
        ref: 'viewer',
        required: true
    },
    type: {
        type: String,
        enum: ['StartFlow', 'EndFlow', 'CancelFlow', 'StartStep','EndStep', 'CancelStep'],
        required: true
    }    
}, {collection: 'activity'})
activitySchema.plugin(timestamp)

module.exports = mongoose.model('activity', activitySchema)