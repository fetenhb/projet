const Utilisateurs = require("../models/utilisateurModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const utilisateurCtrl = {
  inscription: async (req, res) => {
    try {
      const { nom, prenom, email, mot_de_passe, role } = req.body;
      const utilisateur = await Utilisateurs.findOne({ email });
      if (utilisateur)
        return res.status(400).json({ msg: "E-mail déjà utilisé" });
      if (mot_de_passe.length < 8)
        return res
          .status(400)
          .json({ msg: "Le mot de passe doit être minimum 8 caractères" });

      // Password Encryption
      const passwordHash = await bcrypt.hash(mot_de_passe, 10);
      const newUtilisateur = new Utilisateurs({
        nom,
        prenom,
        email,
        role,
        mot_de_passe: passwordHash,
      });

      // Save mongodb
      await newUtilisateur.save();

      // Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUtilisateur._id });
      const refreshtoken = createRefreshToken({ id: newUtilisateur._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/refreshtoken/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  connexion: async (req, res) => {
    try {
      const { email, mot_de_passe } = req.body;

      const user = await Utilisateurs.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/utilisateur/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accesstoken, user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deconnexion: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/utilisateur/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUtilisateur: async (req, res) => {
    try {
      const user = await Utilisateurs.findById(req.utilisateur.id).select(
        "-mot_de_passe"
      );

      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.status(200).send({ user: user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // addCart: async (req, res) => {
  //   try {
  //     const user = await Users.findById(req.user.id);
  //     if (!user) return res.status(400).json({ msg: "User does not exist." });

  //     await Users.findOneAndUpdate(
  //       { _id: req.user.id },
  //       {
  //         cart: req.body.cart,
  //       }
  //     );

  //     return res.json({ msg: "Added to cart" });
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },
  // history: async (req, res) => {
  //   try {
  //     const history = await Payments.find({ user_id: req.user.id });

  //     res.json(history);
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = utilisateurCtrl;