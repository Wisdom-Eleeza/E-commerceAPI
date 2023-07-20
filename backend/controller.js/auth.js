// const userModel = require("../models/userModel");
// const CryptoJS = require("crypto-js");

// // @desc Register user
// // @route POST /api/auth/register
// // @access Public
// const Register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await userModel.findOne({ email });
//     if (user)
//       return res
//         .status(409)
//         .json({ success: false, message: "User already exists" });

//     const encryptedPassword = CryptoJS.AES.encrypt(
//       password,
//       process.env.PASSWORD_SECRET
//     ).toString();

//     const newUser = new userModel({
//       username: username, // Updated to use 'username' instead of 'userName'
//       email: email,
//       password: encryptedPassword,
//     });

//     await newUser.save();

//     return res
//       .status(200)
//       .json({ success: true, message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to register user" });
//   }
// };

// module.exports = Register;
