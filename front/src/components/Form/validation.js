


export default function validationUser(userData, errors, setErrors) {
    
    let emailMsg = ''
    let passwordMsg = '';

     if (userData.password.length < 6 || userData.password.length >10){
        passwordMsg= "Debe tener entre 6 y 10 caracteres"
     } else if(!/\d/.test(userData.password))
     passwordMsg = "Debe contener al menos un número"


    if (!userData.email ) { // si esta vacio o si tiene mas de 35 caracteres :
        emailMsg= "No puede estar vacío" 
    } else if( userData.email.length > 35){
        emailMsg= "No puede superar los 35 caracteres"  
    }else if

    ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) { //sino que valide
        emailMsg= "Email invalido" 
    } 
    
    setErrors({...errors, email: emailMsg, password: passwordMsg})
     



}



