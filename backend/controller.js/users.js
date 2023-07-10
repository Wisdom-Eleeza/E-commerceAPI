const cryptoJs = require("crypto-js");

const Updated = async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }

  try {
    const { id } = req.params
    const updateUser = await userModel.findByIdAndUpdate(id, {
        $set: req.body
    }, { new: true })
    res.status(200).json({ message: updateUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something Went Wrong", error})
  }
};

module.exports = Updated
