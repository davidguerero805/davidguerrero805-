let persona1= {

    nombre: "Fernando",
    edad: 32

};

let persona2= {

    nombre: "Melisa",
    edad: 27

};

let persona3=  {

    nombre: "David",
    edad: 28

};

let personas= [persona1, persona2, persona3];

for(let i = 0; i < personas.length; i++) {

   //let persona= personas[i];
    console.log(`${personas[i].nombre}--${personas[i].edad}`);

}

