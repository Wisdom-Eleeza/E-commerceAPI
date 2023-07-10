const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Extract the token from the authorization header or cookies
  const authHeader = req.headers.token || req.cookies.token;

  if (authHeader) {
    // Split the token by space to separate the "Bearer" prefix
    const token = authHeader.split(" ")[1];

    // Verify the token using the JWT_SECRET from environment variables
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        // If there's an error while verifying the token, respond with a 403 status and error message
        return res.status(403).json({ message: "Token is not valid" });
      }
      
      // If the token is valid, assign the user object to the request object
      req.user = user;

      // Call the next middleware or route handler
      next();
    });
  } else {
    // If no token is provided, respond with a 401 status and error message
    return res.status(401).json({ message: "You are not authenticated!!!" });
  }
};

module.exports = verifyToken;
