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
