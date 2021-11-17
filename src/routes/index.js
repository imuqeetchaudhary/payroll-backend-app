const express = require("express");
const router = express.Router();

const department = require("../routes/hr-department");

router.get("/", (req, res) =>
  res.send({ message: "Payroll Backend App RestApi" })
);

router.use("/department", department);

module.exports = router;
