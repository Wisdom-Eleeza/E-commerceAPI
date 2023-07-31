const asyncHandler = require("express-async-handler");


// @desc Register user
// @route POST /api/users/update-password/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user
    const password = req.body
    if(password){
        user.password = password
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = updateProduct;
