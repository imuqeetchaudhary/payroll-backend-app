exports.init = (sequelize, DataTypes) => {
  const Designation = sequelize.define(
    "Designation",
    {
      desigid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      designame: {
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
    { underscored: true, tableName: "hr_designation" }
  );
  return Designation;
};
