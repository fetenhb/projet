const mongoose = require("mongoose");

const panierSchema = new mongoose.Schema({
  utilisateurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateurs",
  },
  titre: {
    type: String,
    trim: true,
  },
  images: {
    type: String,
  },
  prix: {
    type: Number,
    trim: true,
  },
  description: {
    type: String,
  },
  quantite: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Panier", panierSchema);
