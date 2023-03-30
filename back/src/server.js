
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;            // el port es el que me provee el host o 3001
const router = require ("./routes")
const morgan = require("morgan")
const cors = require("cors")




server.use(cors())          //para que se le pueda hacer peticiones

//server.use(router)

server.use(express.json())       // me lo transforma en objeto (el body, poorque viene en json)
server.use("/",router)         //cuando entra una peticion a "/". se redirige a router
server.use(morgan("dev"))   //nos da info sobre que request nos hicieron y con que status le respondimos




server.listen(PORT, () => {                        //la cb se ejecuta cuando escucha al puerto
    console.log('Server raised in port ' + PORT);
 });