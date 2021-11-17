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

const Department = department.init(dbClient, DataTypes);
const Designation = designation.init(dbClient, DataTypes);

db.Department = Department;
db.Designation = Designation;

module.exports = db;
