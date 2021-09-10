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
router.post("/addTotalPanier", auth, panierCtrl.totalPanier);

module.exports = router;
