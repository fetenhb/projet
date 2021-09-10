const jwt = require("jsonwebtoken");
const userModel = require("../models/utilisateurModel");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    // Check for token
    if (!token)
      return res.status(401).send({ msg: "No Token, authorization denied" });
    console.log("tokennnnnnn", token);
    // Verify Token
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Add User from payload
    const userr = await userModel.findById(decoded.id);
    console.log("rrrrr", userr);
    //Check for user
    if (!userr) {
      // return res.status(401).send({ msg: "authorization denied" })
      return console.log("authorization denied");
    }
    console.log("tokennnnnnn", token);

    // Create user
    req.user = userr;
    next();
    // const token = req.headers["Authorization"];
    // if (!token)
    //   return res.status(400).json({ msg: "authentification invalide" });
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    //   if (err)
    //     return res.status(400).json({ msg: "authentification invalide" });
    //   console.log(user);
    //   const userr = await userModel.findOne({ _id: user.id });
    //   req.user = userr;
    //   next();
    // });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
