class MiNaV extends HTMLElement{
    constructor(){
        super();
        let shadowRoot=this.attachShadow({mode:'open'});
        shadowRoot.innerHTML=this.template;
        //shadowRoot.querySelector('a').addEventListener('click',pintarCoches)
    }

    //Con este método se puede ver el código de la etiqueta
    /*connectedCallback(){
        this.innerHTML=this.template;
    }*/

    get template(){
        //Logo/Coche/Clasificacion
        /*let imagen=document.createElement('img');
        imagen.src='logo.png';
        let texto1=document.createElement('span');
        texto1.appendChild(document.createTextNode('Coches'));
        let texto2=document.createElement('span');
        texto2.appendChild(document.createTextNode('Calificaciones'));
        let div=document.createElement('div')
        div.appendChild(imagen)
        div.appendChild(texto1)
        div.appendChild(texto2)*/
        let contenido=`
        <nav>
            <img src='logo.png' alt='logo'>
            <a href='#'>Coches</a>
            <a href='#'>Clasificación</a>
        </nav>`;
        return contenido;
    }

    
}
export let etiquetaResultado=window.customElements.define('mi-nav',MiNaV);