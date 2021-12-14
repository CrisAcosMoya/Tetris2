let lastTime = 0;
let dropInterval = 1000;
let dropCounter = 0;
let colorMargen = "white";
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const grid = createMatriz(10,20);
const player = {
    pos: {x: 0, y: 0},
    matriz: [
        [0,0,0],
        [0,1,0],
        [1,1,1]
    ]
}



context.scale(20,20);

function createMatriz(width,height){
    const matriz = [];

    while(height--) (
        matriz.push(new Array(width).fill(0))
    )


    return matriz;
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
         });
    });
}

function draw(){
    context.fillStyle = "black"
    context.fillRect(0,0, canvas.width, canvas.height);
    drawMatriz(grid, {x:0 , y:0});   //Dibujamos la matriz mediante un grid, de esta manera nos ahorramos las 30 lineas de codigo de la matriz con tan solo unas cuantas lienas de codigo.
    drawMatriz(player.matriz, player.pos);
}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime; 
    if (dropCounter>dropInterval){
        playerDrop()
    }
    draw();
    requestAnimationFrame(update)
}

update()

function playerDrop(){
    player.pos.y++; //Esto ahce que la pieza caiga, que haya un lapso de tiempo de caida.
    dropCounter=0
}
//Creamos eventos de movimientos de posiciones, segun el player.pos hacemos que la ficha se mueva en X o Y.


document.addEventListener("keydown", event => {
    if(event.keyCode===40) {
        playerDrop();
    } else if (event.keyCode===37){
        player.pos.x--
    } else if (event.keyCode===39){
        player.pos.x++
    } 
})
