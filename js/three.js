/* Esta forma de importar es parecida a Sass pero en ES6. En los otros archivos JS se pone export y entre llaves se mete el
nombre de la var, let, const que definimos*/
import { arr } from './one';
import { object } from './two';

const mostrarResultados = function() {
    let mostrar1 = arr;
    let mostrar2 = object;

    var totalTodo = {
        "status": "OK", "one": mostrar1, "two": mostrar2
    }
    console.log(totalTodo);
}
mostrarResultados();