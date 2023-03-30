import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import { Link, NavLink} from "react-router-dom"
import About from "../About/About"
import style from "./Nav.module.css"


 const Nav=(props) => {
     return  (
          <nav className={style.NavBar}> 
            <SearchBar onSearch={props.onSearch}/> 

            <NavLink to="/home" className={style.Active}>
              <h3 className={style.botones}> Home</h3>
            </NavLink> 

            <NavLink to="/about" className={style.Active} >     

             <h3 className={style.botones}>About</h3>

            </NavLink>  

              
              <NavLink to="/favorites" className={style.Active} >
                <h3 className={style.botones}>Favorites</h3>
              </NavLink>
              <NavLink to="/" className={style.Active}>
               <h3 className={style.botones}>Logout</h3> 
              </NavLink>
          </nav>
            
      
        )
 }
 export default Nav;