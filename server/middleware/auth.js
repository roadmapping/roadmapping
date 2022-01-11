const jwt = require("jsonwebtoken");

async function authenticate(req, res, next) {
  const token = req.cookies.token;

  try {
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    res.locals.id = verified.id;

    next();
  } catch (error) {
    res.status(401).send("Unauthenticated. Please sign in.");
  }
}

module.exports = authenticate;
