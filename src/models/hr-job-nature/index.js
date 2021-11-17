exports.init = (sequelize, DataTypes) => {
  const JobNature = sequelize.define(
    "JobNature",
    {
      jobid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      jobname: {
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
    { underscored: true, tableName: "hr_job_nature" }
  );
  return JobNature;
};
