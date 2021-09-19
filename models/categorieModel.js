const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    prod: [
      {
        id_produit: {
          type: mongoose.Schema.Types.ObjectId,
        },
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
          required: true,
        },

        images: {
          type: Object,
          required: true,
        },

        disponibilite: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categorie", categorieSchema);
