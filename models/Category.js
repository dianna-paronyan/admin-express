
module.exports = (Sequelize, DataTypes) => {
    const Category = Sequelize.define('Categories', {
      name: DataTypes.STRING,
    });

    // Category.associate = (models) => {
    //   Category.hasMany(models.Product,{foreignKey:'categoryId'});
    // };
  
    return Category;
  };