// este controller hace la peticion de la info y determina que respuesta darle al cliente(front que hace el get a e)



const axios = require ("axios")
require("dotenv").config()
const {URL_BASE,KEY} = process.env

const getCharById = (req,res)=>{
    const {id} = req.params;

    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)

    .then(response =>{
        const {id, name, species, image, gender} = response.data
        res.status(200).json({id, name, species, image, gender})
    })
    .catch(error=>{
        res.status(500).json({error : error.message})
    })
}



module.exports= getCharById


















              //**HECHO CON NODE PURO **//
//  declaro mi succes handler. que quiero que pase si sale bien la peticion a la api
// const succesH = (response,res)=>{
//     const {id, image, name, gender, species} = response.data
//     res.writeHead(200,{"Content-Type": "application/json"})
//     res.end(JSON.stringify({id, image, name, gender, species}))
// }

// const errorH=(err, res)=>{
//     res.writeHead(500,{"Content-Type": "text/plain"})
//     res.end(err.message)
// }


// const getCharById = (res, ID) =>{
//     fetch(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then(response =>succesH(response,res) )
//     .catch (err => errorH(err, res))
    
// }



