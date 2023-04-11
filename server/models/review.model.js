const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    concessions: {
        type: Number, 
        required: true,
        min: [1, "Must leave ranking"],
        get: v => Math.round(v * 2) / 2,
        set: v => Math.round(v * 2) / 2
    },
    parking: {
        type: Number, 
        required: true,
        min: [1, "Must leave ranking"],
        get: v => Math.round(v * 2) / 2,
        set: v => Math.round(v * 2) / 2
    },
    views: {
        type: Number, 
        required: true,
        min: [1, "Must leave ranking"],
        get: v => Math.round(v * 2) / 2,
        set: v => Math.round(v * 2) / 2
    },
    atmosphere: {
        type: Number, 
        required: true,
        min: [1, "Must leave ranking"],
        get: v => Math.round(v * 2) / 2,
        set: v => Math.round(v * 2) / 2
    },
    teamShop: {
        type: Number, 
        required: true,
        min: [1, "Must leave ranking"],
        get: v => Math.round(v * 2) / 2,
        set: v => Math.round(v * 2) / 2
    },
    additionalReview: {
        type: String,
        // required: [true, "Additional review required"],
        minlength: [5, "Additional review must be at least 5 characters"]
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    stadium: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stadium"
    }
}, {timestamps: true})

module.exports = mongoose.model("Review", ReviewSchema)