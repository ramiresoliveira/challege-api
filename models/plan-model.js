const mongoose = require('mongoose'),
    timestamp = require('mongoose-timestamp')

const planSchema = new mongoose.Schema({
    name: String,
    value: Number,
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'plan'})

planSchema.plugin(timestamp)

module.exports = mongoose.model('Plan', planSchema)