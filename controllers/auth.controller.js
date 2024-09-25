import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
async function signup(req, res) {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address" });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    const existingUserByUsername = await User.findOne({ username });

    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      email,
      password: hashedPassword,
      username,
      image,
    });

    generateTokenAndSetCookie(user._id, res);
    await user.save();
    // remove password from the response and send other details as document
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: { ...user._doc, password: "" },
    });
  } catch (error) {
    console.log("Error In signup controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: "invalid credentials" });
    }
    const isPasswordCorrest = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrest) {
      res.status(400).json({ success: false, message: "invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { ...user._doc, password: "" },
    });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({ status: true, message: "Logout successfully" });
  } catch (error) {
    console.log("Error In logout controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export { signup, login, logout };
 