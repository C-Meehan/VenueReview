const ReviewController = require('../controllers/review.controller')

module.exports = app => {
    app.post('/api/reviews', ReviewController.createReview);
    app.get('/api/reviews', ReviewController.getAllReviews);
    app.get('/api/reviews/:id', ReviewController.getReviewByUser);
}