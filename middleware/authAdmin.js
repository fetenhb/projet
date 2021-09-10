const Utilisateurs = require("../models/utilisateurModel");
const jwt = require("jsonwebtoken");

const authAdmin = async (req, res, next) => {
  // try {
  //   // Get user information by id
  //   const userr = await Utilisateurs.findOne({
  //     _id: req.userr.id,
  //   });
  //   if (userr.role === 1)
  //     return res.status(400).json({ msg: "accés refusé  " });
  //   next();
  // } catch (err) {
  //   return res.status(500).json({ msg: err.message });
  // }

  const accesstoken = req.header("Authorization");
  console.log(accesstoken, " gggg");
  if (!accesstoken)
    return res.status(400).json({ msg: "authentification invalide" });

  const decoded = await jwt.verify(
    accesstoken,
    process.env.ACCESS_TOKEN_SECRET
  );
  if (!decoded) {
    return res.status(401).json({ msg: "unauthorized" });
  }
  const userr = await Utilisateurs.findOne({ _id: decoded.id });
  req.user = userr;
  console.log(userr);
  if (userr.role === 1) return res.status(400).json(console.log("aaaa"));
  next();

  // return res.status(500).json({ msg: err.message });

  // const accesstoken = req.header("Authorization");

  // if (!accesstoken) {
  //   return res.status(400).json({ msg: "unauthorized1" });
  // }

  // const decoded = await jwt.verify(
  //   accesstoken,
  //   process.env.ACCESS_TOKEN_SECRET
  // );
  // if (!decoded) {
  //   return res.status(401).json({ msg: "unauthorized2" });
  // }

  // // find user
  // const user = await Utilisateurs.findOne({ _id: decoded._id });
  // console.log(user);
  // if (user.role !== 0) {
  //   return res.status(402).json("unauthorized3");
  // }
  // next();
};

module.exports = authAdmin;
