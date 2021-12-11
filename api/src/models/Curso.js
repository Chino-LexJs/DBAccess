const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "curso",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      day: {
        type: DataTypes.INTEGER, // 1 Lunes 2 Martes 5 Viernes
        allowNull: false,
      },
      hour: {
        type: DataTypes.JSONB, // { hora: 8 , minutes: 30 }
        defaultValue: {},
      },
      duration: {
        type: DataTypes.JSONB, // { hora: 8 , minutes: 30 }
        defaultValue: {},
      },
    },
    {
      timestamps: false,
    }
  );
};
