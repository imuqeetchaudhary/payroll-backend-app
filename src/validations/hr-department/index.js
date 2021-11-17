const yup = require("yup");

exports.createDepartmentSchema = yup.object({
  deptname: yup.string().required(),
  depthod: yup.string(),
});
