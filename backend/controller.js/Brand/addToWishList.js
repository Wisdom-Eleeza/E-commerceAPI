const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");
const { userModel } = require("../../models/userModel");

// @desc Add or remove a product from the wishlist
// @route POST /api/users/blog/add-to-wishlist
// @access Private
const addToWishList = asyncHandler(async (req, res) => {
  try {
    const { id } = req.user;
    const { productId } = req.body;

    const user = await userModel.findById(id);
    const alreadyAdded = user.wishList.find(
      (id) => id.toString() === productId
    );

    if (alreadyAdded) {
      user = await userModel.findByIdAndUpdate(
        id,
        {
          $pull: { wishList: productId },
        },
        { new: true }
      );
    } else {
      user = await userModel.findByIdAndUpdate(
        id,
        {
          $push: { wishList: productId },
        },
        { new: true }   
      );
    }

    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = addToWishList;
