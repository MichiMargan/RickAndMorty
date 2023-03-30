import {AGREGAR_FAVORITOS, ELIMINAR_FAVORITOS, FILTRAR, ORDENAR,LIMPIAR} from "./constActions"
import axios from "axios";




export const agregarFavoritos = () =>{
      return async (dispatch)=>{
        const URLBASE = "http://localhost:3001/rickandmorty/fav"
        try {
          const response= await axios.get(URLBASE)
          dispatch({type: AGREGAR_FAVORITOS,payload: response.data})

          } catch (error) {
            console.log(error)
          }
     }   
    
    
}

export const eliminarFavoritos = (id) =>{
    return async (dispatch)=>{
        const URLBASE = "http://localhost:3001/rickandmorty/fav"
        try {
           await axios.delete(`URLBASE ${id}`)
          dispatch({type: ELIMINAR_FAVORITOS,payload: id})

          } catch (error) {
            console.log(error)
          }
}}

export const filterCards = (gender) =>{
return{ type:FILTRAR, payload:gender}
}

export const orderCards = (id) =>{
return {type: ORDENAR, payload: id}
}

export const limpiar = ()=>{
    return {type:LIMPIAR}
}