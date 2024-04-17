let usuario = {}
let Objetos = []
// CAPA BUSINESS.JS
function ValidarUsuario(usuario){
    if(nombre.value.length == 0){
        return console.log("Los campos no pueden estar vacios")
    } 
    if(apellido.value.length == 0){
        return console.log("Los campos no pueden estar vacios")
    }
    if(contraseña.value.length == 0){
        return console.log("Los campos no pueden estar vacios")
    }
    if(edad.value.length == 0){
        return console.log("Los campos no pueden estar vacios")
    }
    GuardarUsuario(usuario)
}

// CAPA DATABASE.JS
function GuardarUsuario(usuario){
    Objetos.push(usuario)
}



// CAPA APP.JS
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let contraseña = document.getElementById("contraseña")
let edad = document.getElementById("edad")

let button1 = document.getElementById("button1")
button1.addEventListener('click' , () => {
    usuario = {
        nombre : nombre.value ,
        apellido : apellido.value ,
        contraseña : contraseña.value ,
        edad : edad.value
    }
    console.log(usuario)
    ValidarUsuario(usuario)
})

let button2 = document.getElementById("button2")
button2.addEventListener('click' , () => {
    console.log("USUARIOS: " , Objetos)
})