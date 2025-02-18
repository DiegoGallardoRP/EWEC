class AppSelect extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode: 'open'})
        if(this.getAttribute('listacoches')){
            this.listaCoches=this.getAttribute('listacoches')
        }else{
            this.listaCoches=''
        }
        
        shadowRoot.innerHTML=this.template;
    }
    get template(){
        let listaCoches=this.listaCoches.split('|');
        let texto=`<select>`
        listaCoches.forEach(coche=>{
            texto+=`<option value='${coche}'>${coche}</option>`;
        })
        texto+='</select>'
        return texto
    }
    static get observedAttributes(){
        return ['listacoches'];
    }
    attributeChangedCallback(attr, oldVal, newVal){
        if(attr=='listacoches' && oldVal!=newVal){
            this.listaCoches=newVal;
            this.shadowRoot.innerHTML=this.template;
        }
    }
}
export let etiquetaMiSelect=window.customElements.define('app-select',AppSelect);