const db = require("../../models");
const dbUtils = require("../error-check.util");
const Exceptions = require("../../utils/custom-exceptions");

exports.saveDesignation = async ({ designame, actionperformedBy }) => {
  const designation = {
    designame,
    createdBy: actionperformedBy,
    updatedBy: actionperformedBy,
  };

  try {
    const newDesignation = await db.Designation.create({ ...designation });
    return newDesignation;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Designation already exists",
      });
    }
    throw err;
  }
};

exports.listAllDesignation = async () => {
  return db.Designation.findAll({
    ..._prop.hideFieldsCondition(),
  });
};

exports.findById = ({ id }) => {
  return db.Designation.findByPk(id, _prop.hideFieldsCondition());
};

exports.updateDesignation = async ({
  desigid,
  designame,
  actionperformedBy,
}) => {
  const designation = {
    designame,
    updatedBy: actionperformedBy,
  };

  try {
    const updateDesignation = await db.Designation.update(
      { ...designation },
      { where: { desigid } }
    );

    if (dbUtils.isRecordFound(updateDesignation)) {
      throw new Exceptions.NotFound({ message: "Designation Not Found" });
    }
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Designation Already Exists",
      });
    }
    throw err;
  }
};

exports.deleteDesignation = async ({ desigid }) => {
  try {
    const deleteDesignation = await db.Designation.destroy({
      where: { desigid },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Designation unless delete all its reference",
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
