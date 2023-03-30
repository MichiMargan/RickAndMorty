import { AGREGAR_FAVORITOS,ELIMINAR_FAVORITOS,FILTRAR,ORDENAR,LIMPIAR} from "./constActions"

const initialState ={
    myFavorites: [],
    allCharacters:[],
}

//las actions.js vienen por parametro y entran en action
const rootReducer=(state=initialState, action) =>{
switch(action.type){

    case AGREGAR_FAVORITOS:
        return {...state, myFavorites:[...state.myFavorites,...action.payload], allCharacters:[...state.allCharacters, ...action.payload]}

    case ELIMINAR_FAVORITOS:
        return {...state, myFavorites: state.myFavorites.filter(
            (char)=>char.id !== action.payload
    )}
    case FILTRAR:
        const {allCharacters,myFavorites} = state
        return( {...state, myFavorites: allCharacters.filter((char)=>{
        if(action.payload ==="Todos") {
        return  {...state,myFavorites} }
        else{ 
            return char.gender === action.payload}
        })
    })
    
    case ORDENAR:                                            
       return  {...state, myFavorites:[...state.allCharacters.sort((a,b)=>{
        if("Ascendente" === action.payload) return a.id - b.id                 //repasar
        if("Descendente" === action.payload) return b.id - a.id
       })]
        }
   
    case LIMPIAR:  //falta
        return {...state, myFavorites:[], allCharacters: []}

    default:
        return{...state}
}
}
export default rootReducer