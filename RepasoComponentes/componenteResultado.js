class Resultado extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode:'open'});
        this.texto=this.getAttribute('texto');
        this.estado=this.getAttribute('estado')
        shadowRoot.innerHTML = this.template;
    }
    

    get template(){
        //Aquí metemos lo que queramos que aparezca
        let contenido=`<style>
            .error{
                color:red;
            }
        </style>
        <p>${this.texto}</p>
        <h1><slot name="clase"></slot></h1>`;
        if(this.estado=='0'){
            contenido+=`<p>OK</p>`;
        }else{
            contenido+=`<p class='error'>ERROR</p>`;
        }
        return contenido;
    }
    static get observedAttributes(){
        return['texto'];
    }

    attributeChangedCallback(attr, oldVal, newVal){
        if(attr=='texto' && oldVal!=newVal){
            this.texto=newVal;
            this.shadowRoot.innerHTML=this.template;
        }
    }
}
export let etiquetaResultado = customElements.define('app-resultado',Resultado)