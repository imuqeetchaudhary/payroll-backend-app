exports.init = (sequelize, DataTypes) => {
  const Shift = sequelize.define(
    "Shift",
    {
      shiftid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      shiftname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    { underscored: true, tableName: "hr_shift" }
  );
  return Shift;
};
