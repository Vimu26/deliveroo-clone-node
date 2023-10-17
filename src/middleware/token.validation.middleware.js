const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.token;
  if (!token) {
    res.status(401).json({ status: false, data: "Token is Not Available" });
  } else {
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (error, decodedPayload) => {
      if (error) {
        res.status(401).json({
          status: false,
          Error: error,
          message: "Token is Invalid Or Expired",
        });
      } else {
        req.userId = decodedPayload.sub;
        next();
      }
    });
  }
};

module.exports = { validateToken };
