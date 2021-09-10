const Categorie = require("../models/categorieModel");
const Produits = require("../models/produitModel");

const categorieCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Categorie.find();
      res.json({ msg: "data fetched", categories });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategorie: async (req, res) => {
    try {
      // if user have role = 1 ---> admin
      // only admin can create , delete and update category
      const { nom, image } = req.body;
      const categorie = await Categorie.findOne({ nom });
      if (categorie)
        return res.status(400).json({ msg: "cette categorie existe deja." });

      const newCategorie = new Categorie({ nom, image });

      await newCategorie.save();
      res.json({ msg: "la categorie a ete cree", newCategorie });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategorie: async (req, res) => {
    try {
      const cat = await Categorie.findOneAndDelete({ _id: req.params.id });
      console.log(cat);
      res.json({ msg: "user deleted", cat });
    } catch (err) {
      console.log(err);
    }
  },
  updateCategorie: async (req, res) => {
    try {
      const cat = await Categorie.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );

      res.json({ msg: "mise a jour categorie", cat });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categorieCtrl;
