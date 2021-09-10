const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema(
  {
    commandeArticles: [
      {
        name: { type: String },
        qtite: { type: Number },
        image: { type: String },
        prix: { type: Number },
        produit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Produit",
          required: true,
        },
      },
    ],
    addresseLivraison: {
      nomComplet: { type: String },
      address: { type: String },
      cite: { type: String },
      codePostal: { type: String },
      Pays: { type: String },
      lat: Number,
      lng: Number,
    },
    methodePaiement: { type: String },
    resultatPaiement: {
      id: String,
      etat: String,
      update_time: String,
      adresse_email: String,
    },
    prixArticles: { type: Number },
    prixLivraison: { type: Number },
    taxe: { type: Number },
    prixTotal: { type: Number },
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Utilisateurs",
      required: true,
    },
    paiment: { type: Boolean, default: false },
    payeLe: { type: Date },
    livre: { type: Boolean, default: false },
    dateLivraison: { type: Date },
  },
  {
    timestamps: true,
  }
);
const commande = mongoose.model("commande", commandeSchema);
