const express = require("express");
const router = express.Router();
const shiftController = require("../../controllers/hr-shift");
const { validation } = require("../../middlewares/validation");
const { authentication } = require("../../middlewares/isAuth");
const {
  createShiftSchema,
  updateShiftSchema,
} = require("../../validations/hr-shift");

router.post(
  "/create",
  authentication,
  validation(createShiftSchema),
  shiftController.createShift
);

router.get("/get-all", authentication, shiftController.getAllShift);

router.get("/get/:id", authentication, shiftController.getSingleShift);

router.patch(
  "/update/:id",
  authentication,
  validation(updateShiftSchema),
  shiftController.updateShift
);

router.delete("/delete/:id", authentication, shiftController.deleteShift);

module.exports = router;
