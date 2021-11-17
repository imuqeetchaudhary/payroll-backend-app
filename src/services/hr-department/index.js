const db = require("../../models");
const dbUtils = require("../error-check.util");
const Exceptions = require("../../utils/custom-exceptions");

exports.saveDepartment = async ({ deptname, depthod, actionperformedBy }) => {
  const department = {
    deptname,
    depthod,
    createdBy: actionperformedBy,
    updatedBy: actionperformedBy,
  };

  try {
    const newDepartment = await db.Department.create({ ...department });
    return newDepartment;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "Department already exists" });
    }
    throw err;
  }
};

exports.listAllDepartment = async () => {
  return db.Department.findAll({
    ..._prop.hideFieldsCondition(),
  });
};

exports.findById = ({ id }) => {
  return db.Department.findByPk(id, _prop.hideFieldsCondition());
};

exports.updateDepartment = async ({
  deptid,
  deptname,
  depthod,
  actionperformedBy,
}) => {
  const department = {
    deptname,
    depthod,
    updatedBy: actionperformedBy,
  };

  try {
    const updateDepartment = await db.Department.update(
      { ...department },
      { where: { deptid } }
    );

    if (dbUtils.isRecordFound(updateDepartment)) {
      throw new Exceptions.NotFound({ message: "Department Not Found" });
    }
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Department Already Exists",
      });
    }
    throw err;
  }
};

exports.deleteDepartment = async ({ deptid }) => {
  try {
    const deleteDepartment = await db.Department.destroy({
      where: { deptid },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Department unless delete all its reference",
      });
    }
    throw err;
  }
};

const _prop = {
  HIDDEN_FIELDS: ["createdAt", "updatedAt"],
  hideFieldsCondition: function (...args) {
    return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
  },
};