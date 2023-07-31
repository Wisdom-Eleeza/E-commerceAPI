const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// AUTH ROUTES
const authRoute = require("./routes/Auth/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const deleteSingleUser = require("./routes/Auth/deleteSingleUser");
const getSingleUser = require("./routes/Auth/getSingleUser");
const getAllUsers = require("./routes/Auth/getAllUsers");
const updateSingleUser = require("./routes/Auth/updateSingleUser");
const blockUser = require("./routes/Auth/blockUser");
const handleRefreshToken = require("./routes/Auth/handleRefreshToken");
const logOut = require("./routes/Auth/logoutRoutes");

// PRODUCTS ROUTES
const CreateProduct = require("./routes/Product/getSingleProductRoutes");
const getSingleProduct = require("./routes/Product/getSingleProductRoutes");
const allProduct = require("./routes/Product/getAllProductRoutes");
const updateProduct = require("./routes/Product/updateProductRoutes");
const deleteProduct = require("./routes/Product/deleteProductRoutes");
const updatePassword = require("./routes/Auth/updatePasswordRoutes");
const addToWishList = require("./routes/AddToWishList/addToWishListRoutes");
const ratings = require("./routes/ProductCategory/ratingRoutes");
const forgotPassword = require("./routes/Auth/forgotPasswordRoutes");
const resetPassword = require("./routes/Auth/resetPasswordRoutes");

//BLOG ROUTES
const createBlog = require("./routes/Blog/createBlogRoutes");
const updateBlog = require("./routes/Blog/updateBlogRoutes");
const getBlog = require("./routes/Blog/getBlogRoutes");
const getAllBlog = require("./routes/Blog/getAllBlogsRoutes");
const deleteBlog = require("./routes/Blog/deleteBlogRoutes");
const likeTheBlog = require("./routes/Blog/likeTheBlogRoutes");
const disLikeTheBlog = require("./routes/Blog/disLikeTheBlogRoutes");
const uploadImages = require("./routes/Blog/uploadImageRoutes");

//CATEGORY ROUTES
const createProductCategory = require("./routes/ProductCategory/CreateProductCategoryRoutes");
const updateProductCategory = require("./routes/ProductCategory/updateProductCategoryRoutes");
const deleteProductCategory = require("./routes/ProductCategory/deleteProductCategoryRoutes");
const getProductCategory = require("./routes/ProductCategory/getProductCategoryRoutes");
const getAllProductCategory = require("./routes/ProductCategory/getAllProductCategoryRoutes");

// BRAND ROUTES
const createBrand = require("../backend/routes/Brand/createBrandRoutes");
const updateBrand = require("../backend/routes/Brand/updateBrandRoutes");
const deleteBrand = require("../backend/routes/Brand/deleteBrandRoutes");
const getBrand = require("../backend/routes/Brand/getBrandRoutes");
const getAllBrand = require("../backend/routes/Brand/getAllBrandRoutes");

// COUPON ROUTES
const createCoupon = require("../backend/routes/Coupon/createCouponRoutes");
const updateCoupon = require("../backend/routes/Coupon/updateCouponRoutes");
const deleteCoupon = require("../backend/routes/Coupon/deleteCouponRoutes");
const getCoupon = require("../backend/routes/Coupon/getCouponRoutes");
const getAllCoupon = require("../backend/routes/Coupon/getAllCouponRoutes");

require("dotenv").config();
const port = process.env.PORT || 3001;

connectDB(); // connect to the database

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// API TESTING ROUTES
app.get("/api/users/status", (req, res) => {
  res.send("API is running");
});
// AUTH ROUTES
app.use("/api/users", authRoute);
app.use("/api/users", logOut);
app.use("/api/users", getAllUsers);
app.use("/api/users/single-user", getSingleUser);
app.use("/api/users/update-a-user", updateSingleUser);
app.use("/api/users", blockUser);
app.use("/api/users", handleRefreshToken);
app.use("/api/users/delete-single-user", deleteSingleUser);
app.use("/api/users/password-update", updatePassword);
app.use("/api/users/forgot-password", forgotPassword);
app.use("/api/users/reset-password", resetPassword);

// PRODUCT ROUTES
app.use("/api/users/product", CreateProduct);
app.use("/api/users/product", getSingleProduct);
app.use("/api/users/product", allProduct);
app.use("/api/users/product/update-product", updateProduct);
app.use("/api/users/product/delete-product", deleteProduct);
app.use("/api/users/product/add-to-wishlist", addToWishList);
app.use("/api/users/product/ratings", ratings);

// BLOG ROUTES
app.use("/api/users/blog/create-blog", createBlog);
app.use("/api/users/blog/update-blog", updateBlog);
app.use("/api/users/blog/get-a-blog", getBlog);
app.use("/api/users/blog/get-all-blog", getAllBlog);
app.use("/api/users/blog/delete-blog", deleteBlog);
app.use("/api/users/blog/:blogId", likeTheBlog);
app.use("/api/users/blog/:blogId", disLikeTheBlog);
app.use("/api/users/blog/upload-image", uploadImages);

// PRODUCT CATEGORY ROUTES
app.use("/api/users/product/create-product-category", createProductCategory);
app.use("/api/users/product/update-product-category", updateProductCategory);
app.use("/api/users/product/delete-product-category", deleteProductCategory);
app.use("/api/users/product/fetch-product-category", getProductCategory);
app.use("/api/users/product/fetch-all-product-category", getAllProductCategory);

// BLOG CATEGORY ROUTES
app.use("/api/users/blog/create-blog-category", createProductCategory);
app.use("/api/users/blog/update-blog-category", updateProductCategory);
app.use("/api/users/blog/delete-blog-category", deleteProductCategory);
app.use("/api/users/blog/fetch-blog-category", getProductCategory);
app.use("/api/users/blog/fetch-all-blog-category", getAllProductCategory);

// BRAND ROUTES
app.use("/api/users/brand/create-brand", createBrand);
app.use("/api/users/brand/update-brand", updateBrand);
app.use("/api/users/brand/delete-brand", deleteBrand);
app.use("/api/users/brand/fetch-brand", getBrand);
app.use("/api/users/brand/fetch-all-brand", getAllBrand);

// COUPON ROUTES
app.use("/api/users/coupon/create-coupon", createCoupon);
app.use("/api/users/coupon/update-coupon", updateCoupon);
app.use("/api/users/coupon/delete-coupon", deleteCoupon);
app.use("/api/users/coupon/fetch-coupon", getCoupon);
app.use("/api/users/coupon/fetch-all-coupon", getAllCoupon);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
