const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// AUTH ROUTES
const authRoute = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const deleteSingleUser = require("./routes/deleteSingleUser");
const getSingleUser = require("./routes/getSingleUser");
const getAllUsers = require("./routes/getAllUsers");
const updateSingleUser = require("./routes/updateSingleUser");
const blockUser = require("./routes/blockUser");
const handleRefreshToken = require("./routes/handleRefreshToken");
const logOut = require("./routes/logoutRoutes");

// PRODUCTS ROUTES 
const CreateProduct = require("./routes/getSingleProductRoutes");
const getSingleProduct = require("./routes/getSingleProductRoutes");
const allProduct = require("./routes/getAllProductRoutes");
const updateProduct = require("./routes/updateProductRoutes");
const deleteProduct = require("./routes/deleteProductRoutes");
const updatePassword = require('./routes/updatePasswordRoutes');
const addToWishList = require('./routes/addToWishListRoutes');
const ratings = require('./routes/ratingRoutes');
const forgotPassword = require("./routes/forgotPasswordRoutes");
const resetPassword = require("./routes/resetPasswordRoutes");

//BLOG ROUTES
const createBlog = require("./routes/createBlogRoutes");
const updateBlog = require("./routes/updateBlogRoutes");
const getBlog = require("./routes/getBlogRoutes");
const getAllBlog = require("./routes/getAllBlogsRoutes");
const deleteBlog = require("./routes/deleteBlogRoutes");
const likeTheBlog = require("./routes/likeTheBlogRoutes");
const disLikeTheBlog = require("./routes/disLikeTheBlogRoutes");
const uploadImages = require("./routes/uploadImageRoutes");

//CATEGORY ROUTES
const categoryRouter = require("./routes/ProductcreateCategoryRouter");

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

// CATEGORY ROUTES
app.use("/api/users/blog/category", categoryRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
