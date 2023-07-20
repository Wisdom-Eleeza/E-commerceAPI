const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ROUTES PATH
const authRoute = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const deleteSingleUser = require('./routes/deleteSingleUser')
const getSingleUser = require('./routes/getSingleUser');
const getAllUsers = require("./routes/getAllUsers");
const updateSingleUser = require("./routes/updateSingleUser");

require("dotenv").config();
const port = process.env.PORT || 3001;

connectDB(); // connect to database

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users/status", (req, res) => {
  res.send("API is running");
});
// ROUTES
app.use("/api/users", authRoute);
app.use("/api/users", getAllUsers);
app.use("/api/users", getSingleUser);
app.use("/api/users", updateSingleUser);
app.use("/api/users/delete-single-user", deleteSingleUser);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
