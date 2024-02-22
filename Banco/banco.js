const mostrarcuenta = document.getElementById("mostrarcuenta")
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const login = document.getElementById("login")
const iniciarSesion = document.getElementById('iniciar-sesion')
const monto = document.getElementById("monto")
const operacion = document.getElementById("to-operate")
const botonRetirar = document.getElementById("retirar")
const botonDepositar = document.getElementById("depositar")
// cambio a let como vamos a modificar
let saldoDisp = 50000
//parseint es para convertir de texto a numero
const retirar = (cantidad) => {
    if (parseInt(saldoDisp) < parseInt(cantidad)) {
        alert("No cuenta con este monto")
        operacion.value = "0"
    }
    else {
        saldoDisp = parseInt(saldoDisp) - parseInt(cantidad)
        monto.innerText = `$ ${saldoDisp}`
    }

}

const depositar = (cantidad) => {
    saldoDisp = parseInt(saldoDisp) + parseInt(cantidad)
    monto.innerText = `$ ${saldoDisp}`
    operacion.value = "0"
}


iniciarSesion.addEventListener("click", function (e) {
    e.preventDefault()
    if (usuario.value === "809" && contraseña.value === "1234") {
        if (mostrarcuenta.style.display === "none") {
            login.style.display = "none"
            mostrarcuenta.style.display = "block";
            monto.innerText = `$ ${saldoDisp}`
        }
        else {
            mostrarcuenta.style.display = "none";
        }
    }
    else {
        alert("Usuario y/o contrasena no validos")
    }
})

if (parseInt(operacion.value) !== "") {
    botonRetirar.addEventListener('click', ()=> retirar(operacion.value))
    botonDepositar.addEventListener('click', () => depositar(operacion.value))
}
