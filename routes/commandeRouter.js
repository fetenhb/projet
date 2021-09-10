const router = require("express").Router();
const commandeCtrl = require("../controllers/commandeCtrl");

router.post("/addCommande/:id", commandeCtrl.createCommande);
router.get("/getProduit", commandeCtrl.getCommande);
// router.put("/UpdateProduit/:idCat/:id", commandeCtrl.updateProduit);
// router.put("/deleteProduit/:idCat/:id", commandeCtrl.deleteProduit);
module.exports = router;
