const designationService = require("../../services/hr-designation");
const { promise } = require("../../middlewares/promise");
const Exceptions = require("../../utils/custom-exceptions");

exports.createDesignation = promise(async (req, res) => {
  const { designame } = req.body;
  const actionperformedBy = req.user.userId;

  const designation = await designationService.saveDesignation({
    designame,
    actionperformedBy,
  });

  res
    .status(200)
    .json({ message: "Successfully created designation", designation });
});

exports.getAllDesignation = promise(async (req, res) => {
  const designation = await designationService.listAllDesignation();
  res.status(200).json({ designation });
});

exports.getSingleDesignation = promise(async (req, res) => {
  const { id } = req.params;

  const designation = await designationService.findById({ id });
  res.status(200).json({ designation });
});

exports.updateDesignation = promise(async (req, res) => {
  const { id } = req.params;
  const desigid = id;
  const { designame } = req.body;
  const actionperformedBy = req.user.userId;

  const updatedesignation = await designationService.updateDesignation({
    desigid,
    designame,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully updated designation" });
});

exports.deleteDesignation = promise(async (req, res) => {
  const { id } = req.params;
  const desigid = id;

  const deletedesignation = await designationService.deleteDesignation({
    desigid,
  });
  res.status(200).json({ message: "Successfully deleted designation" });
});
