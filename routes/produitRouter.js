const router = require("express").Router();
const produitCtrl = require("../controllers/produitCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

// router.route('/produit')
//     .get(produitCtrl.getProduits)
//     .post(auth, authAdmin, produitCtrl.createProduit)

router.put("/addProduit/:id", produitCtrl.createProduit);
router.get("/getProduit/:id", produitCtrl.getProduits);
router.put("/UpdateProduit/:idCat/:id", produitCtrl.updateProduit);
router.put("/deleteProduit/:idCat/:id", produitCtrl.deleteProduit);

// router.route('/produit/:id')
//     .delete(auth, authAdmin, produitCtrl.deleteProduit)
//     .put(auth, authAdmin, produitCtrl.updateProduit)

module.exports = router;
