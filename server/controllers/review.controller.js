const Review = require('../models/review.model')
const SECRET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Stadium = require('../models/stadium.model')

module.exports.getAllReviews = (req,res) => {
    Review.find()
        .populate('creator', 'firstName lastName')
        .then(allReviews => {
            res.json(allReviews)
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        });
} 

module.exports.createReview = (req,res) => {
    // const user = jwt.verify(req.cookies.userToken,SECRET);
    // Review.create({...req.body, creator: User._id, stadium: Stadium._id})
    Review.create({...req.body})
        .then(newReview => {
            res.json({review: newReview})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getReviewByUser = (req, res) => {
    // const user = jwt.verify(req.cookies.userToken,SECRET);
    Review.find({creator: User._id})
        .populate('creator', 'firstName lastName')
        .then(review => res.json(review))
        .catch(err => res.json(err))
}

module.exports.getReviewByStadium = (req, res) => {
    // const user = jwt.verify(req.cookies.userToken,SECRET);
    Review.find({stadium: req.params.id})
        .populate('creator', 'firstName lastName')
        .then(review => res.json(review))
        .catch(err => res.json(err))
}

module.exports.updateReview = (req,res) => {
    Review.findByIdAndUpdate(req.parmas.id, req.body, {new: true, runValidators: true})
        .then(updatedReview => res.json(updatedReview))
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteReview = (req,res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}