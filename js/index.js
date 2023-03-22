alert("BIENVENIDOS A MI CV");

document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "¡¡¡MUCHAS GRACIAS POR SU ATENCION!!!";
}