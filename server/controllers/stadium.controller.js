const Stadium = require('../models/stadium.model')

module.exports.getAllStadiums = (req,res) => {
    Stadium.find()
        .then(allStadiums => {
            res.json(allStadiums)
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.createStadium = (req, res) => {
    Stadium.create(req.body)
        .then(newStadium => {
            res.json({stadium: newStadium})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneStadium = (req, res) => {
    Stadium.findOne({_id: req.params.id})
        .then(stadium => res.json(stadium))
        .catch(err => res.json(err))
}

module.exports.updateStadium = (req, res) => {
    Stadium.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedStadium => res.json(updatedStadium))
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}