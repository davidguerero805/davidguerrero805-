function imprimirTabla(base, limite){
    
    for (let i = 1; i <= limite; i++){
    
        let resultado = base * i; 
    
    console.log(base + "X" + i + "=" + resultado);
    
    }
    
}

imprimirTabla(10, 6);
imprimirTabla(3, 5);
