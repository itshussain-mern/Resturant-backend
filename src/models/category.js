const Sequelize = require('sequelize');
const sequelize = require('./database');

const Category = sequelize.define("category", {
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
    category_image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    approved: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'restaurant',
            key: 'id',
        },
    }

}, {
    paranoid: true,
    freezeTableName: true,
});
module.exports = Category;
