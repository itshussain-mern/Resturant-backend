'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('category', {
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
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('category');
  }
};