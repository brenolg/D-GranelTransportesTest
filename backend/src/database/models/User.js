module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    department: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },

  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return User;
};