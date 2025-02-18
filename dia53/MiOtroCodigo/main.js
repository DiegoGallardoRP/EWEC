import { etiquetaCarrusel } from "./mi-carrusel.js";

onload=()=>{
    recogerDatos();
}
function recogerDatos() {
    fetch('consulta.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'fotos=A'  // Asegúrate de que los datos que envías estén correctos
    })
    .then(response => {
        console.log("Respuesta del servidor:", response);  // Verifica el objeto Response
        return response.json();  // Convierte la respuesta a JSON
    })
    .then(datos => {
        console.log("Datos recibidos:", datos);  // Verifica los datos recibidos
        pintarCarrusel(datos);  // Pasa el objeto JSON a la función pintarCarrusel
    })
    .catch(error => console.log("Error en la petición:", error));  // Captura cualquier error en la petición
}

function pintarCarrusel(datos){
    let carrusel=document.createElement('mi-carrusel');
    carrusel.setAttribute('fotos', JSON.stringify(datos));
    document.body.appendChild(carrusel)
}
