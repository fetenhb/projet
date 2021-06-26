const router = require("express").Router();
const utilisateurCtrl = require("../controllers/utilisateurCtrl");
const auth = require("../middleware/auth");
const {
  validator,
  registerRules,
  loginRules,
} = require("../middleware/validator");

router.post(
  "/inscription",
  registerRules(),
  validator,
  utilisateurCtrl.inscription
);
router.post("/connexion", loginRules(), validator, utilisateurCtrl.connexion);
router.get("/deconnexion", utilisateurCtrl.deconnexion);
router.get("/refresh_token", utilisateurCtrl.refreshToken);
router.get("/infor", auth, utilisateurCtrl.getUtilisateur);
module.exports = router;
