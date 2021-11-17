const departmentService = require("../../services/hr-department");
const { promise } = require("../../middlewares/promise");
const Exceptions = require("../../utils/custom-exceptions");

exports.createDepartment = promise(async (req, res) => {
  const { deptname, depthod } = req.body;
  const actionperformedBy = req.user.userId;

  const department = await departmentService.saveDepartment({
    deptname,
    depthod,
    actionperformedBy,
  });

  res
    .status(200)
    .json({ message: "Successfully created department", department });
});
