//variable del lienzo
let canvas;
//variable del contexto
let ctx;
//fps
const FPS = 50;
// ancho de la ficha
let anchoF = 30; //se multiplica el ancho por el numero de elementos (elementos horizontales -filas) y modificar en canva
let altoF = 30; //se multiplica el alto por el numero de elementos (elementos verticales -columnas) y modificar en canva
// tipo de ficha
let tablero = "black";
let colorMargen = "white";


// escenario array - matriz : conjunto de listas dentro de otras listas
//let lista = [2,3,[4,6],5,6]
let escenario = [
    [0,0,0,0,0,0,0,0,0,0],  //posicion 0
    [0,0,0,0,0,0,0,0,0,0],  // 1
    [0,0,0,0,0,0,0,0,0,0],  // 2
    [0,0,0,0,0,0,0,0,0,0],  // 3
    [0,0,0,0,0,0,0,0,0,0],  // 4
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
   
]

// construir escenario
function dibujarEscenario(){
    let color;
    // recorrer el alto del escenario
    for(y = 0; y < 20; y++){
        //recorrer el ancho del Escenario
        for (x = 0; x < 15; x++){
            // compara para reemplazar las fichas
            if(escenario[y][x] == 0){
                color = tablero;
            }

            ctx.fillStyle = color // colorea las fichas
            ctx.strokeStyle = colorMargen;
            ctx.fillRect(x*anchoF, y*altoF, anchoF, altoF) //crea el tamaño de las figuras
            ctx.strokeRect(x*anchoF, y*altoF, anchoF, altoF);// color margen del tablero
        }   
    }
}

// esta activa todo
function inicializa(){
    canvas = document.getElementById("canva")
    ctx = canvas.getContext("2d")


    setInterval(function(){
        principal()
    },1000/FPS)


}



function principal(){
    dibujarEscenario()
   
}