class Resultado extends HTMLElement{
    constructor(){
        super();
        this.shadowRoot=this.attachShadow({node:'open'});
        shadowRoot = this.template;
    }
    get template(){
        return 'HOLA';
    }
}
export