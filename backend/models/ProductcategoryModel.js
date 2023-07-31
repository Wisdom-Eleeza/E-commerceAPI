const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductCategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timeStamps: true }
);

const ProductCategoryModel = mongoose.model("Product-Category", ProductCategorySchema);
module.exports = ProductCategoryModel;
