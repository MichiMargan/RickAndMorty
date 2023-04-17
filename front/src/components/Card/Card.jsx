import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect, useDispatch} from "react-redux";
 import {eliminarFavoritos} from "../redux/actions";
import { useState,useEffect } from "react";
import axios from "axios";




function Card({id,name,species,gender,image,onClose,myFavorites}) {
   
   const [isFav, setIsFav]=useState(false)
   const dispatch = useDispatch()

    //agrego personajes a fav
   const agregarFavoritos = (character)=>{
      axios.post("http://localhost:3001/rickandmorty/fav",character) 
      .then(res => console.log("character agregado"))        
   }
   


   // const eliminarFavoritos = async (id)=>{

   //    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
   //    dispatch(agregarFavoritos()) //pido actulializacion 
   //    alert("Eliminado con exito")
    
   // }

   

   const handleFavorite = () =>{
      if(isFav){ 
         setIsFav(false)
       dispatch(eliminarFavoritos(id))
      }
      else{
         setIsFav(true)
         agregarFavoritos({      //le paso todo el objeto porque esta destructurado en card
            id,
            name,
            species,
            gender,
            image,
            })    
      }

   }

   useEffect(() => {             //CUANDO EL COMPONENTE SE MONTA :comprueba si el personaje que está en una card ya está dentro de tus favoritos
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
     
      
      <div className={style.Carta}>
        
         { isFav ? (
               <button onClick={handleFavorite} className={style.BotonRojo}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.BotonBlanco}>🤍</button>
            )}

         <button className={style.Boton} onClick={()=> onClose(id)}>             
             X 
         </button>
         
         <img className = {style.Imagen} src={image} alt="Carta" /> 
         
           <Link to ={`/detail/${id}`} >       
         <h3 className= {style.Name}>  {name} </h3>
          </Link>  
          
         <h3 className= {style.Specie}> Species: {species} </h3>
         <h3 className={style.Gender}> Gender: {gender} </h3>
      </div>
   );
}
  

const mapDispatchToProps = (dispatch) =>{    //mejora las actions y las manda a las props
   return {
   //  agregarFavoritos: (character) =>{ dispatch(agregarFavoritos(character))}, 
   //  eliminarFavoritos: (id) =>{dispatch(eliminarFavoritos(id))}
   }
    
 }

 const mapStateToProps = (state) =>{      //=> es para tomar la parte del estado que neccesito
   return{
      myFavorites: state.myFavorites
   }
}




export default connect(mapStateToProps, mapDispatchToProps)(Card)