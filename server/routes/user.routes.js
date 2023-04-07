const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.login)
    app.post('/api/logout', UserController.logout)
    app.get('/api/allusers', UserController.findAllUsers)
    app.get('/api/getuser/:id', UserController.findOneUser)
    app.get('/api/currentuser', UserController.getLogged)
}