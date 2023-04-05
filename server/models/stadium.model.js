const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')

// autoIncrement.initialize(mongoose.connection);

const StadiumSchema = new mongoose.Schema({
    teamName: {
        type: String
    },
    league: {
        type: String
    },
    division: {
        type: String
    },
    stadiumName: {
        type: String
    },
    capacity: {
        type: Number
    },
    location: {
        type: String
    },
    founded: {
        type: Number
    },
    stadiumImage: {
        type: String
    }
}, {timestamps: true});

// StadiumSchema.plugin(autoIncrement.plugin, {
//     model: "Stadium",
//     field: "id",
//     startAt: 1,
//     incrementBy: 1
// });

module.exports = mongoose.model("Stadium", StadiumSchema)