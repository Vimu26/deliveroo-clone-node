const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(401).json({ status: false, data: "Unauthorized Access" });
  }
  //verify the payload of the token
  jwt.verify(
    token,
    process.env.SECRET_ACCESS_TOKEN,
    (error, decodedPayload) => {
      if (!error) {
        req.userId = decodedPayload.sub;
        return next();
      }
      return res.status(401).json({
        status: false,
        Error: error,
        message: "Token is Invalid Or Expired",
      });
    },
  );
};

const validateTokenByHeaders = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ status: false, data: "Unauthorized Access" });
  }
  //verify the payload of the token
  jwt.verify(
    token,
    process.env.SECRET_ACCESS_TOKEN,
    (error, decodedPayload) => {
      if (!error) {
        req.userId = decodedPayload.sub;
        return next();
      }
      return res.status(401).json({
        status: false,
        Error: error,
        message: "Token is Invalid Or Expired",
      });
    },
  );
};

//Decode token
const decodeToken = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({
        status: false,
        message: "Authorization header is missing",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token is missing",
      });
    }

    const decodedPayload = jwt.decode(token);
    if (!decodedPayload) {
      return res.status(401).json({
        status: false,
        message: "Token is Invalid",
      });
    }

    return res.status(200).json({
      status: true,
      data: decodedPayload,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { validateToken, validateTokenByHeaders, decodeToken };
