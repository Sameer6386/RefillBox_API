const jwtUtils = require("../utils/jwtUtils");

exports.authenticate = (req, res, next) => {
  const token = req.headers["authorizaation"];
  if (!token) return res.status(403).json({ message: "Token missing" });

  try {
    const decoded = jwtUtils.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Tnvalid or expired token" });
  }
};
