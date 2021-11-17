const db = require("../../models");
const dbUtils = require("../error-check.util");
const Exceptions = require("../../utils/custom-exceptions");

exports.saveShift = async ({ shiftname, actionperformedBy }) => {
  const shift = {
    shiftname,
    createdBy: actionperformedBy,
    updatedBy: actionperformedBy,
  };

  try {
    const newShift = await db.Shift.create({ ...shift });
    return newShift;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Shift already exists",
      });
    }
    throw err;
  }
};

exports.listAllShift = async () => {
  return db.Shift.findAll({
    ..._prop.hideFieldsCondition(),
  });
};

exports.findById = ({ id }) => {
  return db.Shift.findByPk(id, _prop.hideFieldsCondition());
};

exports.updateShift = async ({
  shiftid,
  shiftname,
  actionperformedBy,
}) => {
  const shift = {
    shiftname,
    updatedBy: actionperformedBy,
  };

  try {
    const updateShift = await db.Shift.update(
      { ...shift },
      { where: { shiftid } }
    );

    if (dbUtils.isRecordFound(updateShift)) {
      throw new Exceptions.NotFound({ message: "Shift Not Found" });
    }
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Shift Already Exists",
      });
    }
    throw err;
  }
};

exports.deleteShift = async ({ shiftid }) => {
  try {
    const deleteShift = await db.Shift.destroy({
      where: { shiftid },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Shift unless delete all its reference",
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
