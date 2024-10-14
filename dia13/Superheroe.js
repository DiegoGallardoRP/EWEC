class Superheroe{
    constructor(identidadSecreta,colorTraje,superpoderes,cantidadPeso){
        this.identidadSecreta=identidadSecreta
        this.colorTraje=colorTraje
        this.superpoderes=superpoderes||[]
        this.cantidadPeso=cantidadPeso
        
    }
}
class SuperheroeVolador extends Superheroe{
    constructor(velocidadVuelo){
        super(identidadSecreta,colorTraje,superpoderes,cantidadPeso);
        this.velocidadVuelo=velocidadVuelo
    }
}