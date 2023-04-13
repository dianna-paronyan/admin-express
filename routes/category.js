const { authenticateToken } = require('../jwt/jwt_authenticate');

function category_routes(app){
    const categories_controller = require('../controllers/category_controller');
    
    app.get('/categories', authenticateToken, categories_controller.allCategories);
    app.post('/createCategory', authenticateToken, categories_controller.createCategory);
    app.put('/updateCategory/:id', authenticateToken, categories_controller.updateCategory);
    app.delete('/deleteCategory/:id', authenticateToken, categories_controller.deleteCategory);
}

module.exports = {
    category_routes
}