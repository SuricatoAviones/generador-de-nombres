document.querySelector('#generar-nombre').addEventListener('submit',cargarNombres);

//Llamar a Ajax para imprimir resultados
function cargarResultados(e){
    e.preventDefault();

    //Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    let url = '';
    url += 'http://uinames.com/api/?'; //El signo es para enviar mas parametros de la url

    const cantidad = document.getElementById('numero').value;

    //Si hay origen agregarlo a la URL
    if(origenSeleccionado !==''){
        url += `region=${origenSeleccionado}&`;
    }
    //Si hay genero agregarlo a la URL
    if(generoSeleccionado !==''){
        url += `gender=${generoSeleccionado}&`;
    }
    //Si hay cantidad de nombres
    if(cantidadSeleccionado !==''){
        url += `amount=${cantidad}&`;

    }   
    
    //Conectar con Ajax
    //Iniciar el XHTMLrequest

    const xhr = new XMLHttpRequest();

    //Abrimos la conexion
    xhr.open('GET', url, true);
    //Datos e impresion del template
    xhr.onload = function (){
        if(this.status ===200){
            const nombres= JSON.parse(this.responseText);

            //Generar el HTML
            let htmlNombres = `<h2>Nombres generados</h2>`;

            htmlNombres += `<ul class= "lista">`;
            //Imprimir cada nombre

            nombres.forEach(function(){
                htmlNombres+=`
                    <li>${nombre.name}
                
                `;
            });

            htmlNombres+= '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    //Enviar el request
    xhr.send();
}