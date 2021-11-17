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

exports.getAllDepartment = promise(async (req, res) => {
  const department = await departmentService.listAllDepartment();
  res.status(200).json({ department });
});

exports.getSingleDepartment = promise(async (req, res) => {
  const { id } = req.params;

  const department = await departmentService.findById({ id });
  res.status(200).json({ department });
});

exports.updateDepartment = promise(async (req, res) => {
  const { id } = req.params;
  const deptid = id;
  const { deptname, depthod } = req.body;
  const actionperformedBy = req.user.userId;

  const updateDepartment = await departmentService.updateDepartment({
    deptid,
    deptname,
    depthod,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully updated Department" });
});

exports.deleteDepartment = promise(async (req, res) => {
  const { id } = req.params;
  const deptid = id;

  const deleteDepartment = await departmentService.deleteDepartment({
    deptid,
  });
  res.status(200).json({ message: "Successfully deleted Department" });
});
