const express = require("express");
const router = express.Router();
const designationController = require("../../controllers/hr-designation");
const { validation } = require("../../middlewares/validation");
const { authentication } = require("../../middlewares/isAuth");
const {
  createDesignationSchema,
  updateDesignationSchema,
} = require("../../validations/hr-designation");

router.post(
  "/create",
  authentication,
  validation(createDesignationSchema),
  designationController.createDesignation
);

router.get("/get-all", authentication, designationController.getAllDesignation);

router.get(
  "/get/:id",
  authentication,
  designationController.getSingleDesignation
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDesignationSchema),
  designationController.updateDesignation
);

router.delete(
  "/delete/:id",
  authentication,
  designationController.deleteDesignation
);

module.exports = router;
