class MiTabla extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode : 'open'});
        this.numfilas=this.getAttribute("numfilas");
        this.numcolumnas=this.getAttribute("numcolumnas");
        shadowRoot.innerHTML= this.template;
            
    }  
    get template(){
        let contenido=`
        <style>
            td{
                border: 2px black solid;
            }
        </style>
        <table>`;
        for(let i=0;i<this.numfilas;i++){
            contenido+=`<tr>`;
            for(let j=0;j<this.numcolumnas;j++){
                contenido+=`<td onclick="saludo()">`;
                contenido+=`HOLA`;
                contenido+=`</td>`;
            }
            contenido+='</tr>'
        }
        contenido+=`</tbody></table>`;
        return contenido;
    } 

    static get observedAttributes() {
        return ["numfilas","numcolumnas"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr == 'numfilas' && oldVal != newVal) {
            this.numfilas = newVal;
            this.shadowRoot.innerHTML = this.template;
        }
        if (attr == 'numcolumnas' && oldVal != newVal) {
            this.numcolumnas = newVal;
            this.shadowRoot.innerHTML = this.template;
        }
    }
}
function saludo(){
    alert('Hola');
}
let etiquetaMiTabla = window.customElements.define('mi-tabla',MiTabla);
export { etiquetaMiTabla,saludo };