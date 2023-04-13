const { authenticateToken } = require('../jwt/jwt_authenticate');

function users_routes(app){
    const user_controller = require('../controllers/users_controller')
    
    app.post('/register', user_controller.register);
    app.post('/login', user_controller.login);
    app.get('/users', authenticateToken, user_controller.allUsers);
    app.put('/updateUser/:id', authenticateToken, user_controller.updateUser);
    app.delete('/deleteUser/:id', authenticateToken, user_controller.deleteUser);
}

module.exports = {users_routes}