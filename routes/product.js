const { authenticateToken } = require('../jwt/jwt_authenticate');

function product_routes(app){
    const products_controller = require('../controllers/product_controller');
    
    
    app.get('/products',  products_controller.allProducts);
    app.post('/createProduct', authenticateToken, products_controller.createProduct);
    app.put('/updateProduct/:id', authenticateToken,  products_controller.updateProduct);
    app.delete('/deleteProduct/:id',authenticateToken, products_controller.deleteProduct);
}

module.exports = {
    product_routes
}