'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rider', {
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
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.BIGINT(10),
                allowNull: false,
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            vehicle_number: {
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
            approved: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
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
        await queryInterface.dropTable('rider');
    }
};