import { useState } from "react"
import style from "./Form.module.css"
import validationUser from "./validation"



 const Formulario= ({login}) =>{
   
    const[userData, setUserData] = useState({email: "", password: ""})
    const[errors, setErrors] = useState({email:"", password:""})


    const handleInputChange = (event) =>{
        const property =event.target.name;                    //la propiedad va a ser el name del input que está disparando el evento (email o password)
        const value =event.target.value;                      // el valor que tenga ese input

        setUserData({ ...userData, [property]: value });                             //! aca actualizamos el estado
        validationUser({ ...userData, [property]: value },errors, setErrors);       //! cuando hay un cambio hacemos la validacion con todos los datos del estado
    }
  
   const handleSubmit = (event) =>{                //una funcion que me ejecuta el login que está en app
    event.preventDefault()
    login(userData)
    
   }
      //si el usuario vuelve al form, access vuelva a ser falsee 
      //OnSubmit es un evento de formulario
   return (
       
    <form className={style.Form} onSubmit={handleSubmit}>

        <div className={style.User}>
            
            <label htmlFor="UserName"> Username: </label>
            <input 
                type="email"           
                name = "email"                    // name : el nombre de ese input
                value={userData.email}           // value : es el valor que ingresa en el input
                onChange={handleInputChange}
               
                />
                <p> {errors.email} </p>
        </div>
        

        <div className={style.Password}>
            <label htmlFor="Password"> Password: </label>
            <input 
            type="text" 
            name= "password"
            value={userData.password}
            onChange={handleInputChange}
           />
           
           <p> {errors.password} </p>
        </div>

        <button className={style.Login} >
            Login
        </button>








    </form>)
}

export default Formulario