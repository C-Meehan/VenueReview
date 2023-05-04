const ReviewController = require('../controllers/review.controller')

module.exports = app => {
    app.get('/api/reviews', ReviewController.getAllReviews);
    app.get('/api/reviews/one/:id', ReviewController.getOneReview);
    app.post('/api/reviews', ReviewController.createReview);
    app.put('/api/reviews/edit/:id', ReviewController.updateReview);
    //VVV This route used for component on bottom of stadium page for all stadium reviews
    app.get('/api/reviews/stadium/:id', ReviewController.getReviewByStadium);
    app.get('/api/reviews/user', ReviewController.getReviewByUser);
    app.get('/api/reviews/user/:id', ReviewController.getReviewByUserWithId);
    app.delete('/api/reviews/:id', ReviewController.deleteReview);
}