const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const authController = {};

authController.signup = async function (req, res, next) {
  const { firstName, lastName, email, password, confirm } = req.body;

  if (confirm !== password) {
    res.status(400).send("Passwords do not match");
  }

  User.findOne({ email }, function (err, data) {
    if (data) {
      res.status(400).send("Email already exists in the database");
    }
  });

  const hashedPw = await bcrypt.hash(password, 10);

  try {
    User.create(
      {
        firstName,
        lastName,
        email,
        password: hashedPw,
      },
      (err, data) => {
        if (err) {
          res.send("Server error in creation");
        } else {
          const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET);
          res.cookie("token", token, {
            httpOnly: true,
          });
          next();
        }
      }
    );
  } catch (err) {
    res.status(500).send("Server error in general");
  }
};

authController.login = async function (req, res, next) {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    res.status(500).send("no user with that email exists");
  }

  const checkPassword = await bcrypt.compare(password, existingUser.password);
  if (!checkPassword) {
    res.status(400).send("Incorrect password");
  }

  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
  res.cookie("token", token, {
    httpOnly: true,
  });
  next();
};

module.exports = authController;
