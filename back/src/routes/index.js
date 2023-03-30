const {Router} = require("express")           
const router = Router() 
const getCharById= require ("../controllers/getCharById")
const getCharDetail= require ("../controllers/getCharDetail")
const routerFav = require("../routes/favs.Router") 
let favs = require("../utils/favs")


router.get("/rickandmorty/onsearch/:id",getCharById)


router.get("/rickandmorty/detail/:id",getCharDetail)


router.use("/rickandmorty/fav", routerFav)   // cuando caiga en esta ruta se va a favs.Routes



// router.post ("/rickandmorty/fav", (req,res) =>{
//     favs.push(req.body)
//     res.status(200).json("ok")
// })


// router.get ("/rickandmorty/fav", (req,res) =>{

//     res.status(200).json(favs)
// })


// router.delete("/rickandmorty/fav/:id", (req, res) =>{
//    const{id} = req.params
//    favs = favs.filter (char=> char.id !== id)
//    res.status(200).send(favs)
// })

module.exports = router;