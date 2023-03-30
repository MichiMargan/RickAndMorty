import style from "./SearchBar.module.css"
import { useState } from "react";          //Hook

export default function SearchBar({onSearch}) {     
   const [id,setId] = useState("")

   const handleChange=(event) =>{
     setId(event.target.value )                  
   }

  
   return (
      <div className={style.Barra}>

         <input 
            className={style.Busqueda} 
            type='search' 
            onChange={handleChange}
         />                                 
          <button className={style.Boton} onClick={ () => onSearch(id) }>         
            Agregar 
          </button>         
      </div>
   );
}
