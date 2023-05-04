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
            console.log("I am in my create review error ", err)
            res.status(400).json({message: "Jang's errors", error: err})
        })
}

module.exports.getReviewByUser = (req, res) => {
    const user = jwt.verify(req.cookies.userToken,SECRET);
    console.log(user)
    console.log(user._id)
    Review.find({creator: user._id})
        .populate('stadium', 'teamName stadiumName stadiumImage')
        .then(review => res.json(review))
        .catch(err => res.json(err))
}

module.exports.getReviewByUserWithId = (req, res) => {
    // const user = jwt.verify(req.cookies.userToken,SECRET);
    // console.log(user)
    // console.log(user._id)
    Review.find({creator: req.params.id})
        .populate('stadium', 'teamName stadiumName stadiumImage')
        .populate('creator', 'firstName')
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

module.exports.getOneReview = (req, res) => {
    Review.findById(req.params.id)
        .populate('stadium', 'stadiumName stadiumImage')
        .then(review => res.json(review))
        .catch(err => res.json(err));
}

module.exports.updateReview = (req,res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedReview => res.json(updatedReview))
        .catch(err => {
            res.status(400).json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteReview = (req,res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}