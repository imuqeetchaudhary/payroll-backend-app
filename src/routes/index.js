const express = require("express");
const router = express.Router();

const department = require("../routes/hr-department");
const designation = require("../routes/hr-designation");
const shift = require("../routes/hr-shift");
const job = require("../routes/hr-job-nature");

router.get("/", (req, res) =>
  res.send({ message: "Payroll Backend App RestApi" })
);

router.use("/department", department);
router.use("/designation", designation);
router.use("/shift", shift);
router.use("/job", job);

module.exports = router;
