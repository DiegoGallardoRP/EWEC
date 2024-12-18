class MiImagen extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode : 'open'});
        shadowRoot.innerHTML='<a href="">IMAGEN</a>'
    }
}
let etiquetaMiImagen=window.customElements.define("mi-imagen",MiImagen);
export {etiquetaMiImagen}