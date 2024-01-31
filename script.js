window.onload = function () {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20
    tam = 3;

    setInterval(jogo, 100); //chama outra função a cada tantos ms

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                velX=0;
                velY=-1;
            break;
            case 'ArrowDown':
                velX=0;
                velY=1;
            break;
            case 'ArrowRight':
            velX=1;
            velY=0;
            break;
            case 'ArrowLeft':
                velX=-1;
                velY=0;
            break;

        }
    });
}

function jogo() {
    ctx.fillStyle = "#22c74e";

    

    ctx.fillRect(0, 0, canvas.width, canvas.height)

    positionX+=velX;
    positionY+=velY;

    snake.push({ x: positionX, y: positionY })

    if(positionX<0){
        positionX=grid;
    }

    if(positionX>grid){
        positionX=0;
    }

    if(positionY<0){
        positionY=grid;
    }

    if(positionY>grid){
        positionY=0;
    }

    ctx.fillStyle = "#fcf112";

    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid, grid)
    }

    while(snake.length>tam){
        snake.shift();
    }

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(foodX*grid,foodY*grid,grid,grid);

    if(positionX == foodX&&positionY==foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
}