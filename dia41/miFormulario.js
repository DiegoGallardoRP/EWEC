class MiFormulario extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML=`<form><p>Usuario <input type='text'></p><p>Clave <input type='text'></p></form>`;
    }
}
let etiquetaMiFormulario = window.customElements.define("mi-formulario",MiFormulario);
export{etiquetaMiFormulario};