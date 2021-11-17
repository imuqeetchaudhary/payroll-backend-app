const express = require("express");
const router = express.Router();
const departmentController = require("../../controllers/hr-department");
const { validation } = require("../../middlewares/validation");
const { authentication } = require("../../middlewares/isAuth");
const {
  createDepartmentSchema,
} = require("../../validations/hr-department");

router.post(
  "/create",
  authentication,
  validation(createDepartmentSchema),
  departmentController.createDepartment
);

module.exports = router;
