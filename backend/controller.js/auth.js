const userModel = require('../models/users');
const CryptoJS = require('crypto-js');

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ email: req.body.email });

    if (user)
      return res
        .status(409)
        .json({ success: false, message: 'User Already exists' });

    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET
    ).toString();

    const newUser = new userModel({
      username: username, // Updated field name from 'name' to 'username'
      email: email,
      password: encryptedPassword,
    });

    await newUser.save();

    return res
      .status(200)
      .json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: 'Failed to Register User' });
  }
};

module.exports = Register;
