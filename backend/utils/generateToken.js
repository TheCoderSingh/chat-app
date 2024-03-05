import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Milliseconds
    httpOnly: true, // Prevent XSS (Cross-Site Scripting) attacks
    sameSite: "strict", // Prevent CSRF (Cross Site Request Forgery) attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
