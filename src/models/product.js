const Sequelize = require('sequelize');
const sequelize = require('./database');

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    product_image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    is_available: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    category_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'category',
            key: 'id',
        },
    }

}, {
    paranoid: true,
    freezeTableName: true,
});
module.exports = Product;
