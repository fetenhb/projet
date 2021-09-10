const router = require("express").Router();
const categorieCtrl = require("../controllers/categorieCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

// router.route('/categorie')
//     .get(categorieCtrl.getCategories )
//     .post( auth, authAdmin,categorieCtrl.createCategorie)

router.post("/addCategorie", categorieCtrl.createCategorie);

router.get("/getCategorie", categorieCtrl.getCategories);

router.put("/UpdateCategorie/:id", categorieCtrl.updateCategorie);
router.delete("/deleteCategorie/:id", categorieCtrl.deleteCategorie);

module.exports = router;
