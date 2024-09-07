'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  
    await queryInterface.addColumn('Countries', 'code', {
      type: Sequelize.INTEGER, 
      allowNull: true,
    });
    await queryInterface.addColumn('Countries', 'language', {
      type: Sequelize.INTEGER, 
      allowNull: true,
    });
    await queryInterface.addColumn('Countries', 'flagCode', {
      type: Sequelize.INTEGER, 
      allowNull: true,
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Countries'.replace());
    await queryInterface.removeColumn('name');
  }
};
