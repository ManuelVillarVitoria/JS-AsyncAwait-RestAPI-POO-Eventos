class EventBrite {
    constructor() {
        // copiamos el Token privado de : https://www.eventbrite.com.mx/account-settings/apps, 
        //al haber creado previamente una clave API en la web de EventBrite una vez logueados.
        this.token_privado = '7HTEDZCUIUMLFDFZH6U6';
        this.ordenar = 'date';
    }

    //Obtiene las categorías en init()
    async obtenerCategorias() {
        //Consular las categorías a la Rest API de EventBrite

    }

}