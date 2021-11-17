const yup = require("yup");

exports.createDesignationSchema = yup.object({
  designame: yup.string().required(),
});

exports.updateDesignationSchema = yup.object({
  designame: yup.string(),
});
