import './App.css'
import Cards from './components/Cards/Cards.jsx'
import { useState, useEffect} from 'react'        
import { Route, Routes,useLocation,useNavigate } from 'react-router-dom'                   
import About from './components/About/About'
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import Favorites from "./components/Favorites/Favorites"
import axios from 'axios'


function App () { 
  const[characters,setCharacters] = useState([])  

  const[access, setAccess] = useState(false)

  const email = "michimargan@hotmail.com"
  const password = "123456"
  const navigate = useNavigate()

  const login = (userData) =>{
    if(email === userData.email && password === userData.password){
      setAccess(true)
      navigate("/home")
    } else{
      alert("Credenciales incorrectas")
    }
  }

  useEffect(() => {                // si access es falso que vaya a /, no nos deja ir a home
    !access && navigate('/');
 }, [access]);


  const onSearch=(id) => {  
    const URL_BASE = "http://localhost:3001/rickandmorty/onsearch"                               
    
    
    fetch(`${URL_BASE}/${id}`)
       .then((response) => response.json())                                             
       .then((data) => {                                                             
          if (data.name && !characters.find(char=> char.id === data.id)) {   //Sacarlo afuera para preguntar antes de pedir la info            
             setCharacters((oldChars) => [...oldChars, data]);                       
          } else {
            if (!characters.find(char=> char.id === data.id)){
              window.alert("No existe ese personaje");
            } 
             
            else {
              window.alert('Ya ingresaste el personaje con ese ID');
            }                                                             
          }
        });

      } 
      const onClose=(id) =>{
        setCharacters(characters.filter ((char) => char.id !== id))           
      }
      const location = useLocation()

  return (
    <div>
       <>
       {location.pathname !=="/" &&  <Nav onSearch={onSearch} />} 

        {/* { location.pathname !== "/" ? ( <Nav onSearch={onSearch}/> ) : ""} */}
        <Routes>

            <Route path='/home' 
            element={<Cards characters={characters}         
            onClose={onClose} />} />         
          
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:detailId' element={<Detail/>} />
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
          </>
         

    </div> 
  )
}

export default App
