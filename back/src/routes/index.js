const {Router} = require("express")           
const router = Router() 
const getCharById= require ("../controllers/getCharById")
const getCharDetail= require ("../controllers/getCharDetail")
const routerFav = require("../routes/favs.Router") 
let favs = require("../utils/favs")


router.get("/rickandmorty/onsearch/:id",getCharById)


router.get("/rickandmorty/detail/:id",getCharDetail)


router.use("/rickandmorty/fav", routerFav)   // cuando caiga en esta ruta se va a favs.Routes





module.exports = router;