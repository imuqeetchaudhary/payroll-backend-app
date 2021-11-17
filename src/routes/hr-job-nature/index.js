const express = require("express");
const router = express.Router();
const jobNatureController = require("../../controllers/hr-job-nature");
const { validation } = require("../../middlewares/validation");
const { authentication } = require("../../middlewares/isAuth");
const {
  createJobNatureSchema,
  updateJobNatureSchema,
} = require("../../validations/hr-job-nature");

router.post(
  "/create",
  authentication,
  validation(createJobNatureSchema),
  jobNatureController.createJobNature
);

router.get("/get-all", authentication, jobNatureController.getAllJobNature);

router.get("/get/:id", authentication, jobNatureController.getSingleJobNature);

router.patch(
  "/update/:id",
  authentication,
  validation(updateJobNatureSchema),
  jobNatureController.updateJobNature
);

router.delete(
  "/delete/:id",
  authentication,
  jobNatureController.deleteJobNature
);

module.exports = router;
