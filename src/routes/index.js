const express = require("express");
const router = express.Router();

const department = require("../routes/hr-department");
const designation = require("../routes/hr-designation");

router.get("/", (req, res) =>
  res.send({ message: "Payroll Backend App RestApi" })
);

router.use("/department", department);
router.use("/designation", designation);

module.exports = router;
