module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      department: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      salary: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      
      birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      cpf: {
        allowNull: false,
        type: Sequelize.STRING(14), 
      },
    });
  },

  down: async(queryInterface, _Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
