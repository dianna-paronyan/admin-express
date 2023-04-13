
module.exports = (Sequelize, DataTypes) => {
    const Product = Sequelize.define('Products', {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    });

    Product.associate = (models) => {
      Product.belongsTo(models.Category);
    };
  
    return Product;
  };