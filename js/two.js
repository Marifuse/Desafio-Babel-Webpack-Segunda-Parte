var object = { Nombre: "John", Edad: 30, Ciudad: "New York" };

try {
    var check = JSON.stringify(object);
        console.log(check);
   /*   return check = "ok";*/
}
    catch(error) {
        console.log('Error de Sintaxys', error.message);
    }
export { object }; //Es parecido a Sass donde en un JS se puede importar como manifiesto