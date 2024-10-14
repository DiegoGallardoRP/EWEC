class Vehiculo{
    constructor(marca,modelo,color,matricula,kilometros,
        cilindrada,antiguedad,foto,numeroDeAsientos=4){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.matricula = matricula
        this.kilometros = kilometros
        this.numeroDeAsientos = numeroDeAsientos
        this.cilindrada = cilindrada
        this.antiguedad = antiguedad
        this.foto = foto
    }
    verAntiguedad(){
        alert(`Este coche es del año ${this.antiguedad}`);
    }
    verDiseño(){
        let codigoHTML="<table><tbody>";
        for(campo in this){
            codigoHTML+=`<tr><td>${campo}</td><td>${this[campo]}</td></tr>`;
        }
        codigoHTML+="</tbody></table>";
        document.body.insertAdjacentHTML("beforened",codigoHTML);
    }
    fijarColor(){
        this.color=prompt('Dame el color');
    }
    fijarFoto(foto){
        this.foto=foto;
    }
}