const Panier = require("../models/panierModel");
const Utilisateurs = require("../models/utilisateurModel");
const Total = require("../models/totalModel");

const panierCtrl = {
  getPanier: async (req, res) => {
    try {
      const panierr = await Panier.find();
      res.json({ msg: "data fetched", panierr });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  addPanier: async (req, res) => {
    try {
      const newPanier = new Panier({
        utilisateurId: req.user._id,
        ...req.body,
      });
      console.log("aaaaaaaaaaaa", newPanier);
      const panier = await newPanier.save();
      const user = await Utilisateurs.findOne({
        _id: req.user._id,
      });
      user.paniers = [...user.paniers, panier._id];
      user.save();
      res.json({ msg: "panier created", panier, user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deletePanier: async (req, res) => {
    try {
      const pan = await Panier.findOneAndDelete({ _id: req.params.id });
      console.log(pan);
      res.json({ msg: "user deleted", pan });
    } catch (err) {
      console.log(err);
    }
  },
  updatePanier: async (req, res) => {
    try {
      const pan = await Panier.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );

      res.json({ msg: "mise a jour panier", pan });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  totalPanier: async (req, res) => {
    try {
      let i = 0;
      const pan = await Panier.find();
      tot = pan.map((el) => (i += el.prix * el.quantite));
      console.log("pan", pan);
      console.log("tot", i);
      // console.log(Panier.find(req.user.id).prix);
      // const tot = await Panier.findById(req.user.id).map((el) => {
      //   i += el && el.prix * el && el.quantite;
      //   console.log("el", req.user.id);
      // });
      const newTotal = new Total({
        utilisateurId: req.user._id,
        totalPanier: i,
      });
      newTotal.save();
      res.json({ msg: "total created", tot, newTotal });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = panierCtrl;
