const router = require("express").Router();
const panierCtrl = require("../controllers/panierCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

// router.route('/categorie')
//     .get(categorieCtrl.getCategories )
//     .post( auth, authAdmin,categorieCtrl.createCategorie)

router.post("/addPanier", auth, panierCtrl.addPanier);

router.get("/getPanier", auth, panierCtrl.getPanier);

router.put("/updatePanier/:id", auth, panierCtrl.updatePanier);
router.delete("/deletePanier/:id", panierCtrl.deletePanier);
router.post("/addTotalPanierr", auth, panierCtrl.totalPanier);
router.put("/editTotalPanierr", auth, panierCtrl.totalPanier);

router.get("/getTotalPanier", auth, panierCtrl.getTotalPanier);

module.exports = router;
