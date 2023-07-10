const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ROUTES PATH
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

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
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
