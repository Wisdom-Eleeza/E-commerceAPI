const mongoose = require("mongoose");
const Address = require("../models/address");
const Product = require("./productModel");
const bcrypt = require("bcrypt");
const { restart } = require("nodemon");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    Address: [{ type: mongoose.Schema.Types.ObjectId, ref: Address }],
    wishList: [{ type: mongoose.Schema.Types.ObjectId, ref: Product }],
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Add isPasswordMatched method to the schema methods
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// Generating a Reset Password Token with crypto
userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000 // 10 minutes
    return resetToken
};

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel: userModel, // Export the User model
  isPasswordMatched: userModel.prototype.isPasswordMatched, // Export the isPasswordMatched method
};
