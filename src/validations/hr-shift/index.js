const yup = require("yup");

exports.createShiftSchema = yup.object({
  shiftname: yup.string().required(),
});

exports.updateShiftSchema = yup.object({
  shiftname: yup.string(),
});
