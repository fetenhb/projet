const express = require("express");
const connect = require("./config/connectDB");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

//instantiation
const app = express();
// middlewware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

//routes
app.use("/utilisateur", require("./routes/utilisateurRouter"));
app.use("/categorie", require("./routes/categorieRouter"));
app.use("/produit", require("./routes/produitRouter"));
app.use("/commande", require("./routes/commandeRouter"));
app.use("/panier", require("./routes/panierRouter"));

// connect to DB
connect();
//port

const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.json({ msg: "welcome" });
// });
