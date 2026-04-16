
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var interval = 1000/60;

setInterval(game, interval);

var objs = [];

// for(var i = 0; i < 20; i++){
//     objs[i] = createGameObject();
//     objs[i].x = setRandomValue(objs[i].radius, canvas.width - objs[i].radius);
//     objs[i].y = setRandomValue(objs[i].radius, canvas.height - objs[i].radius);
//     objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`;
// }
var particles = 0;

function emitParticle(){
    var i = particles;
    particles += 1;
    objs[i] = createGameObject();
    objs[i].x = ball.x;
    objs[i].y = ball.y;
    objs[i].moveX = -ball.moveX;
    //objs[i].y = setRandomValue(objs[i].radius, canvas.height - objs[i].radius);
    objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`;
    console.log("Spawn Particle" + i.toString())
}

setInterval(emitParticle, 10);



var ball = createGameObject();
ball.moveX = 2;
ball.y = canvas.height - ball.radius * 2;

function game(){
    //clear the screen
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Update the objects
    ball.x += ball.moveX;

    if(ball.x > canvas.width - ball.radius){
        ball.moveX *= -1;
        ball.y -= 10
    }
     if(ball.x <  ball.radius){
        ball.moveX *= -1;
        ball.y -= 10
    }

    //draw the objects
    ball.drawCircle();
    for(var i = 0; i < objs.length; i++){
        objs[i].drawCircle();

        //Check for boundaries
        if(objs[i].x > canvas.width - objs[i].radius){
            objs[i].moveX *= -1;
            objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
        }
        if(objs[i].y > canvas.height - objs[i].radius){
            objs[i].moveY *= -1;
            objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
        }
        if(objs[i].x < objs[i].radius){
            objs[i].moveX *= -1;
            objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
        }
        if(objs[i].y < objs[i].radius){
            objs[i].moveY *= -1;
            objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
        }


        objs[i].x += objs[i].moveX;
        objs[i].y += objs[i].moveY;
    }
}