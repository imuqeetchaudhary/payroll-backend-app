const JobNatureService = require("../../services/hr-Job-nature");
const { promise } = require("../../middlewares/promise");
const Exceptions = require("../../utils/custom-exceptions");

exports.createJobNature = promise(async (req, res) => {
  const { jobname } = req.body;
  const actionperformedBy = req.user.userId;

  const jobNature = await JobNatureService.saveJobNature({
    jobname,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully created Job", jobNature });
});

exports.getAllJobNature = promise(async (req, res) => {
  const jobNature = await JobNatureService.listAllJobNature();
  res.status(200).json({ jobNature });
});

exports.getSingleJobNature = promise(async (req, res) => {
  const { id } = req.params;

  const jobNature = await JobNatureService.findById({ id });
  res.status(200).json({ jobNature });
});

exports.updateJobNature = promise(async (req, res) => {
  const { id } = req.params;
  const jobid = id;
  const { jobname } = req.body;
  const actionperformedBy = req.user.userId;

  const updateJobNature = await JobNatureService.updateJobNature({
    jobid,
    jobname,
    actionperformedBy,
  });

  res.status(200).json({ message: "Successfully updated Job" });
});

exports.deleteJobNature = promise(async (req, res) => {
  const { id } = req.params;
  const jobid = id;

  const deleteJobNature = await JobNatureService.deleteJobNature({
    jobid,
  });
  res.status(200).json({ message: "Successfully deleted Job" });
});
