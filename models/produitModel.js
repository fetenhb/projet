const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      trim: true,
      required: true,
    },
    prix: {
      type: Number,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },

    images: {
      type: Object,
    },

    disponibilite: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, //important
  }
);

module.exports = mongoose.model("Produit", produitSchema);
