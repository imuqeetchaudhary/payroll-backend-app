const shiftService = require("../../services/hr-shift");
const { promise } = require("../../middlewares/promise");
const Exceptions = require("../../utils/custom-exceptions");

exports.createShift = promise(async (req, res) => {
  const { shiftname } = req.body;
  const actionperformedBy = req.user.userId;

  const shift = await shiftService.saveShift({
    shiftname,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully created shift", shift });
});

exports.getAllShift = promise(async (req, res) => {
  const shift = await shiftService.listAllShift();
  res.status(200).json({ shift });
});

exports.getSingleShift = promise(async (req, res) => {
  const { id } = req.params;

  const shift = await shiftService.findById({ id });
  res.status(200).json({ shift });
});

exports.updateShift = promise(async (req, res) => {
  const { id } = req.params;
  const shiftid = id;
  const { shiftname } = req.body;
  const actionperformedBy = req.user.userId;

  const updateshift = await shiftService.updateShift({
    shiftid,
    shiftname,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully updated shift" });
});

exports.deleteShift = promise(async (req, res) => {
  const { id } = req.params;
  const shiftid = id;

  const deleteshift = await shiftService.deleteShift({
    shiftid,
  });
  res.status(200).json({ message: "Successfully deleted shift" });
});
