const mongoose = require("mongoose");

const utilisateurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  prenom: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  mot_de_passe: {
    type: String,
    required: true,
  },
  etat_compte: {
    type: Boolean,
    default: true,
  },

  sexe: {
    type: String,
  },
  role: {
    type: Number,
    default: 1,
  },

  adress: {
    type: String,
  },
  tel: {
    type: Number,
  },
  code_postal: {
    type: Number,
  },
  ville: {
    type: String,
  },
  gouvernorat: {
    type: String,
  },
  paniers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Panier",
    },
  ],
  totalPanier: { type: mongoose.Schema.Types.ObjectId, ref: "Total" },
});

module.exports = mongoose.model("Utilisateurs", utilisateurSchema);
