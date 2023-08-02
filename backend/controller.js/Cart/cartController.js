const CartModel = require("../../models/CartModel");
const Product = require("../../models/productModel");
const { userModel } = require("../../models/userModel"); 
const asyncHandler = require("express-async-handler");

const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;

  try {
    let products = [];
    const user = await userModel.findById(_id);

    // Check if user already has products in the cart
    const alreadyExistCart = await CartModel.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }

    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }

    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }

    // Assuming CartModel is the correct model name for creating a new cart entry
    let newCart = await new CartModel({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();

    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = userCart;
