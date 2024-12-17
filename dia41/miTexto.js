class TextoEspecial extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode: 'open'});
        this.texto=this.getAttribute('texto');
        shadowRoot.innerHTML=this.template;
    }
    get template(){
        return `<h1>${this.texto}</h1>`;
    }   
}
let etiquetaMiTexto = window.customElements.define('mi-texto',TextoEspecial);
export {etiquetaMiTexto}