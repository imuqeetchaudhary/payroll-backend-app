exports.init = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      deptid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      deptname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      depthod: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
    { underscored: true, tableName: "hr_department" }
  );
  return Department;
};
