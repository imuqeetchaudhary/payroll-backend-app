const db = require("../../models");
const dbUtils = require("../error-check.util");
const Exceptions = require("../../utils/custom-exceptions");

exports.saveJobNature = async ({ jobname, actionperformedBy }) => {
  const jobNature = {
    jobname,
    createdBy: actionperformedBy,
    updatedBy: actionperformedBy,
  };

  try {
    const newJobNature = await db.JobNature.create({ ...jobNature });
    return newJobNature;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Job already exists",
      });
    }
    throw err;
  }
};

exports.listAllJobNature = async () => {
  return db.JobNature.findAll({
    ..._prop.hideFieldsCondition(),
  });
};

exports.findById = ({ id }) => {
  return db.JobNature.findByPk(id, _prop.hideFieldsCondition());
};

exports.updateJobNature = async ({ jobid, jobname, actionperformedBy }) => {
  const jobNature = {
    jobname,
    updatedBy: actionperformedBy,
  };

  try {
    const updateJobNature = await db.JobNature.update(
      { ...jobNature },
      { where: { jobid } }
    );

    if (dbUtils.isRecordFound(updateJobNature)) {
      throw new Exceptions.NotFound({ message: "Job Not Found" });
    }
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Job Already Exists",
      });
    }
    throw err;
  }
};

exports.deleteJobNature = async ({ jobid }) => {
  try {
    const deleteJobNature = await db.JobNature.destroy({
      where: { jobid },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Job unless delete all its reference",
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
