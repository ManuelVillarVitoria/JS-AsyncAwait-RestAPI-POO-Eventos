class EventBrite {
    constructor() {
        // Copiamos el Token privado de : https://www.eventbrite.com.mx/account-settings/apps, 
        //al haber creado previamente una clave API en la web de EventBrite una vez logueados.
        this.token_privado = '7HTEDZCUIUMLFDFZH6U6';
        this.ordenar = 'date';
    }

    //Obtiene las categorías en init()
    async obtenerCategorias() {
        //Consular las categorías a la Rest API de EventBrite
        const respuestaCategorias = 
        // Vamos a la documentación para desarrolladores que recibimos por email al haber creado la clave API
        // y copiamos la URL Example que sacamos de la siguiente ruta de la documentación:
        // https://www.eventbrite.com/platform/api-keys?internal_ref=social

        //La url que hemos copiado es la siguiente:
        //https://www.eventbriteapi.com/v3/users/me/?token=7HTEDZCUIUMLFDFZH6U6
        
        //Cambiamos 'users/me' por 'categories' en la url y sustituimos el token por '${this.token_privado}'
        await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_privado}`);

        //Esperar la respuesta de las categorías y devolver un JSON
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado
        return {
            categorias
        }
    }

}