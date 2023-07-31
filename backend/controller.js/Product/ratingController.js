const asyncHandler = require("express-async-handler");
const Product = require("../../models/productModel");

// @desc Get a single user by ID
// @route GET /api/users/ratings/:id
// @access Public
const ratings = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;
  try {
    const product = await Product.findById(productId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );

    if (alreadyRated) {
      await Product.updateOne(
        { "ratings.postedby": _id },
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
        { new: true }
      );
    } else {
      await Product.findByIdAndUpdate(productId, {
        $push: {
          ratings: {
            star: star,
            comment: comment,
            postedby: _id,
          },
        },
      });
    }

    const getAllRatings = await Product.findById(productId);
    let totalRaters = getAllRatings.ratings.length;
    let ratingSum = getAllRatings.ratings
      .map((item) => item.star)
      .reduce((prev, current) => prev + current, 0);
    let actualRating = Math.round(ratingSum / totalRaters);
    let finalProduct = await Product.findByIdAndUpdate(
      productId,
      { totalRating: actualRating },
      { new: true }
    );

    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = ratings;
