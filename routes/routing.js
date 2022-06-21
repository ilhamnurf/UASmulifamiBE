const express = require("express");
const router = express.Router();
const { login } = require("../controler/authContoler");
const { register,indexUser ,detailUser} = require("../controler/userControler");
const { regKate,indexKate ,deleteKate} = require("../controler/KateContoler");

const { regProd,indexProd ,deleteProd} = require("../controler/productControler");
const { regGalery,indexGalery } = require("../controler/galeryControler");
const { regFav,indexFav } = require("../controler/FavControler");

//Galery
router.post("/regGalery",regGalery);
router.get("/galery", indexGalery);

//Favorit
router.post("/regFav",regFav);
router.get("/indexFav", indexFav);

//Prod
router.post("/regProd",regProd,);
router.get("/prod", indexProd);
router.delete('/deleteProd/:id',deleteProd);
  
//kate
router.post("/regKate",regKate,);
router.get("/kate", indexKate);
router.delete('/deleteKate/:id',deleteKate);

//user
router.post("/register",register);
router.get("/user", indexUser);
router.get("/detailUser/:id",detailUser );

//auth
router.post("/login", login);

module.exports=router