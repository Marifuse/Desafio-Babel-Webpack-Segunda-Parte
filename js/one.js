let arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

    arr.forEach(function (nuevoArr) {
        return nuevoArr;
    });

    arr = arr.map(function(calculoArr) {
        var resultado = calculoArr * 4;
            if(resultado > 8) {
                console.log(resultado);
                return resultado;
            }
    });

    export { arr }; //Es parecido a Sass donde en un JS se puede importar como manifiesto
