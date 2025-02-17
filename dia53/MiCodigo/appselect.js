class AppSelect extends HTMLElement{
    static get ObservedAttributes(){
        return ['listaCoches'];
    }
}
let etiquetaMiSelect=window.customElements.define('app-select',AppSelect)