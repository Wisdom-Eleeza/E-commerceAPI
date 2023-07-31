const mongoose = require("mongoose");
const { Schema } = mongoose;

// Declare the Schema of the Mongo model
const blogCategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Blog-Category", blogCategorySchema);
