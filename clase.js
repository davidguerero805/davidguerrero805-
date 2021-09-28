/*let carro1= {
    marca: 'Mazda',
    tipo: 'sedan',
    puertas: 3
};*/

class Carro {

    constructor(marca1, tipo1, puertas) {

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

        this.creadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
        if (this.encendido) {

            console.error("El carro ya estaba encendido");
        } else {

            this.encendido = true;
            console.log("El carro esta encendido");

        }
return this; 
    }

    realizarViaje(consumo){


        if(!this.encendido) return console.log("Carro apagado");
        if(consumo > this.gasolina) return console.log("No puedo realizar el viaje: gasolina "+ this.gasolina);

        this.gasolina = this.gasolina - consumo;
                return 'Le queda ' + this.gasolina; 
       /* forma larga de hacerlo  
       
       if(this.encendido){

            if(consumo > this.gasolina){

                console.error("No puedo realizar el viaje: gasolina "+ this.gasolina);
            } else {

                this.gasolina = this.gasolina - consumo;
                return 'Le queda ' + this.gasolina; 

            }
            
        } else {

            console.error('El carro esta apagado');
        }*/

    }// fin clase 
}

let carro = new Carro('Toyota', 'Sedan', 2)

console.log(carro);