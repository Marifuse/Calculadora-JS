// Función de la calculadora

/*La primera función colocada va a actualizar la pantalla de la calculadora, colocando un valor
que se pase como parámetro*/
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
/*La segunda función va a recoger el ultimo resultado obtenido, o la expresión matemática que se va
a calcular para que se visualice*/
function getResult() {
    return(document.getElementById('result').innerHTML);
}
/*La tercera función (del cual, a cada botón se le puso directamente el onclick para evitar exceso
de código), añade la tecla que se va a pulsar. Le agrgamos la variable result que llama a la segunda
función que visualiza lo que se está realizando. Si la pantalla contiene información o la tecla pulsada
no es un número, la tecla apretada va a salir en pantalla. En caso contrario, si la tecla apretada es un
número, reemplaza el contenido puesto (Si hay un 0 y agrego el número 2, el 0 será reemplazado por el 2)*/
function add(key) {
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
/*La cuarta función tiene como objetivo realizar el calculo usando la función eval() (su objetivo radica
en evaluar expresiones. Si lo agregado representa a una o más sentencias, las evalúa), y así escribir el
resultadp en pantalla*/
function calc() {
    var result = eval(getResult());
    setResult(result);
}
/*La última función dentro de esta sentencia, pone un 0 y borra todo el contenido puesto en la pantalla*/
function del() {
    setResult("0");
}
