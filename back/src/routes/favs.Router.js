const {Router} = require("express")           
const routerFav = Router() 
let favs = require("../utils/favs")



routerFav.post ("/", (req,res) =>{
    favs.push(req.body)
  
    console.log(req.body)
    res.status(200).json("ok")
})


routerFav.get ("/", (req,res) =>{

    res.status(200).json(favs)
})


routerFav.delete("/:id", (req, res) =>{
   const{id} = req.params
   favs = favs.filter (char=> char.id !== id)
   res.status(200).send("eliminado con exito")
})

module.exports = routerFav

