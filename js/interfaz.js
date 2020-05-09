class Interfaz {
    constructor() {
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos')

    }

    //Método par acuando inicialize la app
    init(){

    }

    //Imprimir categorías
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias();
    }
}