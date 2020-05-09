class Interfaz {
    constructor() {
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos')

    }

    //Método par acuando inicialize la app
    init(){
        //Llamar a imprimir categorias de la Rest API
        this.imprimirCategorias();
    }

    //Imprimir categorías
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                //console.log(categorias);
                const cats = categorias.categorias.categories;

                //Seleccionar el Select de categorias
                const selectCategoria = document.getElementById('listado-categorias');

                //Recorremos el array e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    //Igualamos el option con el 'id' porque en la documentación vemos las categorias deben 
                    //ser relacionadas con el 'id'.
                    //https://www.eventbrite.com.mx/platform/api#/reference/categories/retrieve/category-by-id
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                })
            })
    }

    //Método para imprimir mensajes: 2 parámetros,mensaje y clases
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        //Agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //Buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        //Quitar el alert después de 3s
        setTimeout(() => {
            this.limpiarMensaje();
        },3000);
 
    }

    //Desaparece el mensaje en caso de que exista
    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}