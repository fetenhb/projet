const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("nom", "le nom est obligatoire").notEmpty(),
  body("prenom", "le prénom est obligatoire").notEmpty(),
  body("email", `l'émail est obligatoire`).isEmail(),
  body(
    "mot_de_passe",
    "le mot de passe doit contenir au minimum 6 caractères"
  ).isLength({
    min: 6,
    max: 20,
  }),
];

const loginRules = () => [
  body("email", `l'émail est obligatoire`).isEmail(),
  body(
    "mot_de_passe",
    "le mot de passe doit contenir au minimum 6 caractères"
  ).isLength({
    min: 6,
    max: 20,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = { validator, registerRules, loginRules };
