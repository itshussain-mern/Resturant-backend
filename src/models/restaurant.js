const Sequelize = require('sequelize');
const sequelize = require('./database');

const Restaurant = sequelize.define("restaurant", {
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
    slogan: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnic_number: {
        type: Sequelize.BIGINT(13),
        allowNull: false,
    },
    cnic_front_image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnic_back_image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    account_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id',
        },
    },
    deleted_at: {
        type: Sequelize.DATE
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
}, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
});
module.exports = Restaurant;
