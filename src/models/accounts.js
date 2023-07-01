const Sequelize = require('sequelize');
const sequelize = require('./database');

const Accounts = sequelize.define("accounts", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    permissions: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
module.exports = Accounts;
