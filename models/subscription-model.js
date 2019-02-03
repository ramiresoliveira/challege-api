const mongoose = require('mongoose'), 
    timestamp = require('mongoose-timestamp')

const subscriptionSchema = new mongoose.Schema({
    idPlan: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref : 'plan'
    },
    idCompany:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    status: String,
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'subscription'})

subscriptionSchema.plugin(timestamp)

module.exports = mongoose.model('Subscription', subscriptionSchema)