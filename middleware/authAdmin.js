const Utilisateurs = require("../models/utilisateurModel");

const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const utilisateur = await Utilisateurs.findOne({
      _id: req.utilisateur.id,
    });
    if (utilisateur.role === 1)
      return res.status(400).json({ msg: "accés refusé  " });
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
