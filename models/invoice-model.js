const mongoose = require('mongoose'),
    timestamp = require("mongoose-timestamp")

const invoiceSchema = new mongoose.Schema({
    idSubscription: {
        type: mongoose.Types.ObjectId,
        ref: "subscription",
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    dueDate:{
        type: Number,
        required: true
    },
    paiedDate:{
        type: Date
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, {collection: 'invoice'})
invoiceSchema.plugin(timestamp)

module.exports = mongoose.model('Invoice', invoiceSchema)