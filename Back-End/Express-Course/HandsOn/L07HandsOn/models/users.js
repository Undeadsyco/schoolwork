/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    Username: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
