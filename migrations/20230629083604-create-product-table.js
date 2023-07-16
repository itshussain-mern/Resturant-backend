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
            product_image: {
                type: Sequelize.STRING,
                allowNull: false,
              },
            is_available: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'category',
                    key: 'id',
                },
            },
            deletedAt: {
                type: Sequelize.DATE
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
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