const asyncHandler = require("express-async-handler");
const { userModel } = require("../../models/userModel");

// @desc Get a single user by ID
// @route GET /api/users/addToWishList/:id
// @access Public
const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  try {
    const user = await userModel.findById(_id);
    const alreadyAdded = user.wishList.find(
      (id) => id.toString() === productId
    );

    if (alreadyAdded) {
      // If the product is already in the wishlist, remove it
      const updatedUser = await userModel.findByIdAndUpdate(
        _id,
        { $pull: { wishList: productId } },
        { new: true } // Pass 'new' as an option here
      );
      res.json(updatedUser);
    } else {
      // If the product is not in the wishlist, add it
      const updatedUser = await userModel.findByIdAndUpdate(
        _id,
        { $push: { wishList: productId } },
        { new: true } // Pass 'new' as an option here
      );
      res.json(updatedUser);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = addToWishList;
