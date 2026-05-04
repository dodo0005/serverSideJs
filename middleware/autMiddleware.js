import jwt from "jsonwebtoken";
import "dotenv/config";

export const authCheck = (req, res, next) => {
  // 1. Check if the Authorization header exists
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }
  // 2. Extract the token
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token missing from Bearer string" });
  }
  // 3. Verify the token
  const decodedToken = jwt.verify(token, process.env.jwt_secret);
  // 4. Extract userId and attach to request
  const userId = decodedToken.Id;
  req.auth = { userId };
  next();
};