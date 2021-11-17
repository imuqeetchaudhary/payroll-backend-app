const express = require("express");
const router = express.Router();
const departmentController = require("../../controllers/hr-department");
const { validation } = require("../../middlewares/validation");
const { authentication } = require("../../middlewares/isAuth");
const {
  createDepartmentSchema,
  updateDepartmentSchema,
} = require("../../validations/hr-department");

router.post(
  "/create",
  authentication,
  validation(createDepartmentSchema),
  departmentController.createDepartment
);

router.get("/get-all", authentication, departmentController.getAllDepartment);

router.get(
  "/get/:id",
  authentication,
  departmentController.getSingleDepartment
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDepartmentSchema),
  departmentController.updateDepartment
);

router.delete(
  "/delete/:id",
  authentication,
  departmentController.deleteDepartment
);

module.exports = router;
