exports.init = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      empid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      empname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      cardno: {
        type: DataTypes.STRING(20),
      },
      fhtype: {
        type: DataTypes.STRING(20),
      },
      fhname: {
        type: DataTypes.STRING(255),
      },
      dob: {
        type: DataTypes.DATE,
      },
      joindate: {
        type: DataTypes.DATE,
      },
      hiredate: {
        type: DataTypes.DATE,
      },
      confirmdate: {
        type: DataTypes.DATE,
      },
      deptid: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "hr_department",
          key: "deptid",
        },
      },
      desigid: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "hr_designation",
          key: "desigid",
        },
      },
      jobid: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "hr_job_nature",
          key: "jobid",
        },
      },
      cnic: {
        type: DataTypes.STRING(30),
      },
      cnicexpiry: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.STRING(499),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      officialemail: {
        type: DataTypes.STRING(255),
      },
      cellno: {
        type: DataTypes.STRING(20),
      },
      iceno: {
        type: DataTypes.STRING(20),
      },
      grosssalary: {
        type: DataTypes.FLOAT,
      },
      bankaccount: {
        type: DataTypes.STRING(50),
      },
      bankdetail: {
        type: DataTypes.STRING(499),
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
    { underscored: true, tableName: "hr_employee" }
  );
  return Employee;
};
