const userModel = require("../models/userModel");

const deleteAUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = deleteAUser;
