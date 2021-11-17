const yup = require("yup");

exports.createJobNatureSchema = yup.object({
  jobname: yup.string().required(),
});

exports.updateJobNatureSchema = yup.object({
  jobname: yup.string(),
});
