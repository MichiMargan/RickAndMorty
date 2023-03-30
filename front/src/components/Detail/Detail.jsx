import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css"

export default function Detalles() {
   const {detailId} = useParams()
    const [character, setCharacters] = useState({});
        useEffect(() => {
       
            const URLBASE = "http://localhost:3001/rickandmorty/detail"

            axios(`${URLBASE}/${detailId}`)
            .then((response) =>
            setCharacters(response.data)
            )
            .catch(()=>  console.log("error"))
        }, [] );

    //         fetch(`${URLBASE}/character/${detailId}?key=${KEY}`)
    //         .then((response) => response.json())
    //         .then((char) => {
    //             if (char.name) {
    //                 setCharacters(char);
    //             } else {
    //             window.alert("No hay personajes con ese ID");
    //             }
    //         })
    //         .catch((err) => {
    //             window.alert("No hay personajes con ese ID");
    //         });
    //         return setCharacters({});
    //     }, [detailId]);
        return (
            <div className={style.DetailConteiner}>

                {character.name ? (
                    <>
                       
                        <h2> Name: {character.name} </h2>
                        <h2> Status: {character.status} </h2>
                        <h2> Specie: {character.species} </h2>
                        <h2> Gender: {character.gender} </h2>
                        <h2> Origin: {character.origin?.name} </h2>
                        <img src={character.image} alt={character.name}/>
                    </>
                ) : (
                    <h3>loading...</h3>
                )}

            </div>
        )
}
