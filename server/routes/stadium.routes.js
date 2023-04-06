const StadiumController = require('../controllers/stadium.controller')

module.exports = app => {
    app.post('/api/stadiums', StadiumController.createStadium);
    app.get('/api/stadiums', StadiumController.getAllStadiums);
    app.get('/api/stadiums/:id', StadiumController.getOneStadium);
    app.put('/api/stadiums/:id', StadiumController.updateStadium);
}