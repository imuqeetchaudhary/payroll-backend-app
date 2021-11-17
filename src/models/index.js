const config = require("config");
const { Sequelize, DataTypes } = require("sequelize");

function init() {
  const sequelize = new Sequelize({ ...config.get("db") });
  return () => sequelize;
}
const getDbClient = init();
const dbClient = getDbClient();

const db = {};
db.sequelize = dbClient;

const department = require("./hr-department");
const designation = require("./hr-designation");
const shift = require("./hr-shift");
const jobNature = require("./hr-job-nature");
const employee = require("./hr-employee");

const Department = department.init(dbClient, DataTypes);
const Designation = designation.init(dbClient, DataTypes);
const Shift = shift.init(dbClient, DataTypes);
const JobNature = jobNature.init(dbClient, DataTypes);
const Employee = employee.init(dbClient, DataTypes);

db.Department = Department;
db.Designation = Designation;
db.Shift = Shift;
db.JobNature = JobNature;
db.Employee = Employee;

module.exports = db;
