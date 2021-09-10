const Produits = require("../models/produitModel");
const Categories = require("../models/categorieModel");

// Filter, sorting and paginating

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-cree le ");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const produitCtrl = {
  getProduits: async (req, res) => {
    try {
      const produits = await Categories.findById(req.params.id, { prod: 1 });
      res.json({ msg: "data fetched", produits });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // getProduits: async (req, res) => {
  //   try {
  //     const features = new APIfeatures(Produits.find(), req.query)
  //       .filtering()
  //       .sorting()
  //       .paginating();

  //     const produits = await features.query;

  //     res.json({
  //       status: "Reussite",
  //       result: produits.length,
  //       produits: produits,
  //     });
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },

  createProduit: async (req, res) => {
    try {
      const produit = await Categories.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { prod: { ...req.body } } }
      );
      res.json({ msg: "user edited", produit });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteProduit: async (req, res) => {
    try {
      const cat = await Categories.update(
        { _id: req.params.id },
        {
          $pull: { prod: { "prod._id": req.params.id } },
        }
      );

      console.log(cat);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduit: async (req, res) => {
    try {
      const categories = await Categories.find();
      console.log(categories);
      console.log(typeof categories);
      await Categories.update(
        { "prod._id": req.params.id },
        {
          $set: {
            "prod.$.titre": req.body.titre,
            "prod.$.prix": req.body.prix,
          },
        }
      );

      // const produit = cat.prod.find((cat) => cat._id == req.params.id);
      // produit.titre = req.body.titre;
      // produit.prix = req.body.prix;
      // await produit.save();
      res.json({ msg: "vvv" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = produitCtrl;
