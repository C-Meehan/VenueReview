const ReviewController = require('../controllers/review.controller')

module.exports = app => {
    app.post('/api/reviews', ReviewController.createReview);
    app.get('/api/reviews', ReviewController.getAllReviews);
    app.get('/api/reviews/:id', ReviewController.getReviewByUser);
    //VVV This route used for component on bottom of stadium page for all stadium reviews
    app.get('/api/reviews/stadium/:id', ReviewController.getReviewByStadium);
}