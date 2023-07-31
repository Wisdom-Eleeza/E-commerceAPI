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

const Category = mongoose.model("Product-Category", ProductCategorySchema);
module.exports = Category;
