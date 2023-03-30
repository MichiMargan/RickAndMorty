import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { orderCards, filterCards, agregarFavoritos } from "../redux/actions"
import { useEffect } from "react"



const Favorites = () =>{
    const favorites = useSelector((state) => state.myFavorites)   //manera para funcionales, me traigo el estado

    const dispatch = useDispatch()

    const ordenar = (event) =>{
        return dispatch(orderCards(event.target.value))
    }


    const filtrar = (event)=>{
        return dispatch(filterCards(event.target.value))

    }

    useEffect(()=>{
        dispatch(agregarFavoritos())
    },[dispatch])
    // const todos = (event)=>{
    //     return dispatch(todos(event.target.value))
    // }
 return (
    <div className={style.Fondo}>
    {
        favorites.map((personaje)=>{
            return <Card
            key ={personaje.id}
            id={personaje.id}
            name ={personaje.name} 
            species = {personaje.species} 
            gender = {personaje.gender}
            image= {personaje.image}
            
            />
        })
    }
    
    <div className={style.Filtro}>

        <select name={favorites.name} onChange= {ordenar} className={style.Ascendente}>
            <option value= "Ascendente">Ascendente</option>  
            <option value= "Descendente">Descendente</option>
        </select>



        <select name={favorites.gender} onChange={filtrar} className={style.Descendente}>
            <option value= "Todos">Todos</option>
            <option value="Male"> Male </option>
            <option value= "Female"> Female </option>
            <option value= "Genderless"> Genderless </option>
            <option value="Unknown"> Unknown </option>
         </select>
    </div>
    </div>
 )
}



export default Favorites