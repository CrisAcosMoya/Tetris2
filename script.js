let lastTime = 0;
let dropInterval = 1000;  //El drop interval es de 1 segundo, lo que hace que cada segundo la pieza haga algo con ese segundo, en este caso que cambie de posicion en y++
let dropCounter = 0;
let colorMargen = "white";  //Creamos una margen la cual no esta funcionando pero la usamos para guiar al jugador y ser mas util al momento de jugar
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const grid = createMatriz(10,20);
const player = {
    pos: {x: 0, y: 0},
    matriz: [
        [0,0,0],  //Creamos la matriz de la pieza con 1 y 0, estos 0 se utilizan para darle espacio a la ficha de rotar. Cuando el programa vea y procese el 1, lo pinta de un color del recuadro
        [1,1,1],
        [0,1,0]
    ]
}



context.scale(20,20);

function createMatriz(width,height){
    const matriz = [];  //Creamos la matriz mediante las medidas del canva, esta matriz se basa en "0"

    while(height--) (
        matriz.push(new Array(width).fill(0))
    )


    return matriz;
}

function collide(grid, player){
    const matriz = player.matriz
    const offset = player.pos
    for(let y=0; y<matriz.length; ++y){
        for(let x=0; x< matriz[y].length; ++x){
            if(matriz[x][y] !== 0 && (grid[y + offset.y] && grid[y + offset.y][x + offset.x])!== 0) {
                return true;
            }
        } //Lo que hacemos aca es que tome nuestro grid (Valores de 0, en la matriz), y si los valores son distintos a 0 haga un true donde no pueda desplegarse mas de alli.
    }
    return false
}


context.fillStyle = "black"
context.fillRect(0,0, canvas.width, canvas.height);


function drawMatriz(matriz, offset){
    matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!== 0){
                context.fillStyle = "blue"
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
         });  //Aqui dibujamos la matriz y hacemos el recorrido de esta con un row, de esta manera crea y dibuja la matriz dentro del canvas.
    });
}

function draw(){
    context.fillStyle = "black"
    context.fillRect(0,0, canvas.width, canvas.height);
    drawMatriz(grid, {x:0 , y:0});  
    drawMatriz(player.matriz, player.pos);  //Hacemos unos grid donde nos ubique los 0 y estos 0 los pinte de color negro, este grid nuevamente se basa en el heigth y el width de canvas

}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;  //Aqui hacemos un dropCounter y un drop interval para la caida de la pieza, y hacer un tiempo determinado para que corra la posicion de cada ficha
    if (dropCounter>dropInterval){
        playerDrop()
    }
    draw();
    requestAnimationFrame(update)
}

update()

function playerDrop(){
    player.pos.y++; //Esto hace que la pieza caiga, que haya un lapso de tiempo de caida.
    if(collide(grid, player)){
        player.pos.y--
    }
    dropCounter=0 
}

document.addEventListener("keydown", event => {
    if(event.key==="ArrowDown") {
        playerDrop();
    } else if (event.key==="ArrowLeft"){
        player.pos.x--
    } else if (event.key==="ArrowRight"){
        player.pos.x++
    } 
})  //Aqui manejamos las keys, para poder hacer que las figuras funcionen mediante los eventos de las teclas.
