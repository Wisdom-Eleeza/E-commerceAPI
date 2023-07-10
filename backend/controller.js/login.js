const userModel = require("../models/users");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User Does not Exist" });

    if (!email || !password)
      return res.status(401).json({ success: false, message: "Wrong Credentials" });

    const hashedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const originalPassword = hashedPassword.toString(cryptoJs.enc.Utf8);

    if (originalPassword !== password)
      return res.status(403).json({ success: false, message: "Wrong Credentials" });

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({ success: true, message: { user, accessToken } });
    console.log({ message: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to Login" });
  }
};

module.exports = login;
