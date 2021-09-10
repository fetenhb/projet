const Categorie = require("../models/categorieModel");
const Produits = require("../models/produitModel");
const Utilisateurs = require("../models/utilisateurModel");
const Commande = require("../models/commandeModel");
const commandeCntrl = {
  getCommande: async (req, res) => {
    try {
      const commandes = await Commande.find();
      res.json(commandes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCommande: async (req, res) => {
    try {
      // if user have role = 0 or 1

      const { commandeArticles, addresseLivraison } = req.body;

      const newCommande = new Commande({ commandeArticles, addresseLivraison });

      await newCommande.save();
      res.json({ msg: "Creer une Commande" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
////////////////////////////////////////////////////////////
///const orderRouter = express.Router();
//orderRouter.get(
// '/',
// isAuth,
// isSellerOrAdmin,
//expressAsyncHandler(async (req, res) => {
// const seller = req.query.seller || '';
// const sellerFilter = seller ? { seller } : {};

// const orders = await Order.find({ ...sellerFilter }).populate(
//  'user',
//  'name'
//);
// res.send(orders);
// })
//);

// commandeRouter.get(
//   "/summary",
//   auth,
//   authAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const commandes = await commande.aggregate([
//       {
//         $group: {
//           _id: null,
//           numcommandes: { $sum: 1 },
//           totalVentes: { $sum: "$prixTotal" },
//         },
//       },
//     ]);
//     const utilisateurs = await Utilisateur.aggregate([
//       {
//         $group: {
//           _id: null,
//           numUtilisateurs: { $sum: 1 },
//         },
//       },
//     ]);
//     const commandesjournalieres = await Commande.aggregate([
//       {
//         $group: {
//           _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
//           orders: { $sum: 1 },
//           sales: { $sum: "$prixTotal" },
//         },
//       },
//       { $sort: { _id: 1 } },
//     ]);
//     const categorieProduit = await Produit.aggregate([
//       {
//         $group: {
//           _id: "$categorie",
//           count: { $sum: 1 },
//         },
//       },
//     ]);
//     res.send({
//       utilisateurs,
//       commandes,
//       commandesjournalieres,
//       categorieProduit,
//     });
//   })
// );

// commandeRouter.get(
//   "/mine",
//   auth,
//   expressAsyncHandler(async (req, res) => {
//     const commandes = await Commande.find({ utilisateur: req.utilisateur._id });
//     res.send(commandes);
//   })
// );

// commandeRouter.post(
//   "/",
//   auth,
//   expressAsyncHandler(async (req, res) => {
//     if (req.body.commandeArticles.length === 0) {
//       res.status(400).send({ message: "panier vide" });
//     } else {
//       const commande = new Commande({
//         commandeArticles: req.body.commandeArticles,
//         addresseLivraison: req.body.addresseLivraison,
//         methodePaiement: req.body.methodePaiement,
//         prixArticles: req.body.prixArticles,
//         prixLivraison: req.body.prixLivraison,
//         taxe: req.body.taxe,
//         prixTotal: req.body.prixTotal,
//         utilisateur: req.utilisateur._id,
//       });
//       const createdCommande = await commande.save();
//       res
//         .status(201)
//         .send({ message: "Nouvelle commande cree", commande: createdCommande });
//     }
//   })
// );

// commandeRouter.get(
//   "/:id",
//   auth,
//   expressAsyncHandler(async (req, res) => {
//     const commande = await Commande.findById(req.params.id);
//     if (commande) {
//       res.send(commande);
//     } else {
//       res.status(404).send({ message: "Commande non trouvee" });
//     }
//   })
// );

// commandeRouter.put(
//   "/:id/pay",
//   auth,
//   expressAsyncHandler(async (req, res) => {
//     const commande = await Commande.findById(req.params.id).populate(
//       "user",
//       "email name"
//     );
//     if (commande) {
//       commande.paiement = true;
//       commande.payeLe = Date.now();
//       commande.resultatPaiement = {
//         id: req.body.id,
//         etat: req.body.etat,
//         update_time: req.body.update_time,
//         adresse_email: req.body.adresse_email,
//       };
//       const updatedCommande = await commande.save();
//       mailgun()
//         .messages()
//         .send(
//           {
//             from: "Patisserie <serviceClientele@pt.patisserie.com>",
//             to: `${commande.utilisateur.name} <${commande.utilisateur.email}>`,
//             subject: `Nouvelle commande ${commande._id}`,
//             html: payOrderEmailTemplate(commande),
//           },
//           (error, body) => {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log(body);
//             }
//           }
//         );
//       res.send({ message: "commande payee", commande: commandemiseajour });
//     } else {
//       res.status(404).send({ message: "Commande non trouvee" });
//     }
//   })
// );

// commandeRouter.delete(
//   "/:id",
//   auth,
//   authAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const commande = await Commande.findById(req.params.id);
//     if (order) {
//       const deleteCommande = await commande.remove();
//       res.send({ message: "Commande supprimee", commande: deleteCommande });
//     } else {
//       res.status(404).send({ message: "Commande non Trouvee" });
//     }
//   })
// );

// commandeRouter.put(
//   "/:id/livrer",
//   auth,
//   authAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const commande = await Commande.findById(req.params.id);
//     if (commande) {
//       commande.livre = true;
//       commande.dateLivraison = Date.now();

//       const updatedCommande = await commande.save();
//       res.send({ message: "Commande livree", commande: updatedCommande });
//     } else {
//       res.status(404).send({ message: "Commande non trouvee" });
//     }
//   })
// );

module.exports = commandeCntrl;
