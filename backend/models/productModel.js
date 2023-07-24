const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    images: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
      // select: false, // hiding the sold item from the user
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true, 
      // select: false,
    },
    ratings: [
      {
        star: Number, 
        comment: String,
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
