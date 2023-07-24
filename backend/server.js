const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// ROUTES PATH
const authRoute = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const deleteSingleUser = require("./routes/deleteSingleUser");
const getSingleUser = require("./routes/getSingleUser");
const getAllUsers = require("./routes/getAllUsers");
const updateSingleUser = require("./routes/updateSingleUser");
const blockUser = require("./routes/blockUser");
const handleRefreshToken = require("./routes/handleRefreshToken");
const logOut = require("./routes/logoutRoutes");
const CreateProduct = require("./routes/getSingleProductRoutes");
const getSingleProduct = require("./routes/getSingleProductRoutes");
const allProduct = require("./routes/getAllProductRoutes");
const updateProduct = require("./routes/updateProductRoutes");
const deleteProduct = require("./routes/deleteProductRoutes");
const updatePassword = require('./routes/updateProductRoutes')

require("dotenv").config();
const port = process.env.PORT || 3001;

connectDB(); // connect to database

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/users/status", (req, res) => {
  res.send("API is running");
});
// ROUTES
app.use("/api/users", authRoute);
app.use("/api/users", logOut);
app.use("/api/users", getAllUsers);
app.use("/api/users", getSingleUser);
app.use("/api/users", updateSingleUser);
app.use("/api/users", blockUser);
app.use("/api/users", handleRefreshToken);
app.use("/api/users/delete-single-user", deleteSingleUser);
app.use("/api/users/password-update",  updatePassword);
// PRODUCT ROUTES
app.use("/api/users/product", CreateProduct);
app.use("/api/users/product", getSingleProduct);
app.use("/api/users/product", allProduct);
app.use("/api/users/product/update-product", updateProduct);
app.use("/api/users/product/delete-product", deleteProduct);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
