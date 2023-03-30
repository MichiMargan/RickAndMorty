const axios = require ("axios")
require("dotenv").config()
const {URL_BASE,KEY} = process.env

const getCharDetail = (req,res)=>{
    const {id} = req.params;

 
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    // axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response =>{
        const {id, name, species, image, gender,origin,status} = response.data
        res.status(200).json({id, name, species, image, gender,origin,status})
    })
    .catch(error=>{
        res.status(500).json({error : error.message})
    })
    
}



module.exports= getCharDetail












// const succesH = (response,res)=>{
//     const { image, name, gender, status, origin, species} = response.data
//     res.writeHead(200,{"Content-Type" : "application/json"})
//     res.end(JSON.stringify({image, name, gender, status, origin, species}))
// }

// const errorH = (error,res)=>{
//     res.writeHead(500,{"Content-Tpe":"text/plain"})
//     res.end(error.message)
// }

// const getCharDetail=(res,ID)=>{
//     fetch(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then(response => succesH(response,res))
//     .catch(error=>errorH(error,res))
    
// }