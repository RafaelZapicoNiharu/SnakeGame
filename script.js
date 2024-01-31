window.onload = function(){
    const tela = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    positionY= 10;
    foodX=15;
    foodY=15;
    velX=0;
    velY=0;
    grid=20
    tam = 3;

    setInterval(jogo,100); //chama outra função a cada tantos ms
}

function jogo(){
ctx.fillStyle="#87e68e";

ctx.fillRect()
}