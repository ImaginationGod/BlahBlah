import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milli-seconds
        httpOnly: true, //Make token not accessible by JavaScript (prevents XSS attacks)
        sameSite: "strict", //Prevents CSRF attacks
        secure: process.env.NODE_ENV !== "development",
    });
    return token;
}