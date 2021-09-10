const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema({
  utilisateurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateurs",
  },
  totalPanier: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Total", totalSchema);
