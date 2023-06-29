'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product', {
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
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            isAvailable: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            restaurant_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'restaurant',
                    key: 'id',
                },
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'category',
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product');
    }
};