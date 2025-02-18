class MiCarrusel extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode: 'open'})
        if(this.getAttribute('fotos')){
            this.fotos=this.getAttribute('fotos');
        }else{
            this.fotos='[]'
        }
        
        shadowRoot.innerHTML=this.template;
    }
    get template(){
        let fotos=JSON.parse(this.fotos);
        let texto=``;
        if(fotos.length > 0){
            fotos.forEach(foto=>{
                texto+=`<img src='${foto.nombre}' width= ${foto.tamano}px alt='${foto.nombre}'><br>`;
            })
        }        
        return texto
    }
    static get observedAttributes(){
        return ['fotos'];
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr=='fotos'&&oldVal!=newVal){
            this.fotos=newVal;
            this.shadowRoot.innerHTML=this.template;
        }
    }
}
export let etiquetaCarrusel=window.customElements.define('mi-carrusel',MiCarrusel);