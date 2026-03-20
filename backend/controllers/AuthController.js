const UserModel = require("../Models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "User already exists, please login",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successfully",
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};


// LOGIN
const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: "User not found",
        success: false
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      return res.status(403).json({
        message: "Invalid email or password",
        success: false
      });
    }

    // create token
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email: user.email,
      name: user.name
    });

  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

module.exports = {
  signup,
  login
};