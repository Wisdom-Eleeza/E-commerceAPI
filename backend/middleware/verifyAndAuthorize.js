const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
    } else {
        res.status(403).json({message: "Unauthorized: You not allowed to Update"})
    }
  });
};

module.exports = verifyTokenAndAuthorization
