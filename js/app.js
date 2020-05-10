const eventbrite = new EventBrite();
const ui = new Interfaz();

//Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    //console.log('presionado');

    //Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //console.log(textoBuscador);
    //console.log(categoriaSeleccionada);

    //Revisar que hay aalgo escrito en el buscador
    if(textoBuscador != '') {
        //cuando si hay una búsqueda
        eventbrite.obtenerEventos(textoBuscador,categoriaSeleccionada)
            .then(eventos => {
                console.log(eventos);
            })
    } else {
        //Mostrar el mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador','alert alert-danger mt-4');
    }
})