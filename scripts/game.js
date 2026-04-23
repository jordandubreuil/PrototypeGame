
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

//Spawn Particles
//setInterval(emitParticle, 10);

var radiusX = 200;
var radiusY = 100;
var tiltAngle = 0;
var tiltSpeed = 0.005;

var ball = createGameObject();
ball.radius = 5;
var square = createGameObject();
square.color = "blue";
square.width = 100;
square.height = 100;

var centerX = ball.x;
var centerY = ball.y;
var angle = 0;
var angularSpeed = 0.02;
//ball.moveX = 2;
//ball.y = canvas.height - ball.radius * 2;

function game(){
    //clear the screen
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Update the objects
    //ball.x += ball.moveX;
    console.log(w);
    //add controls
    if(w){
        centerY -= 3;
       
    }
    if(s){
        centerY += 3;
    }
    if(a){
        centerX -= 3; 
    }
    if(d){
        centerX += 3;
    }

    // centerY += 3;
    // centerX += 3;
     
    //Orbit code
    square.x = centerX + Math.cos(angle) * radiusX;
    square.y = centerY + Math.sin(angle) * radiusY;

    angle -= angularSpeed;
    tiltAngle += tiltSpeed;
  

    if(ball.x > canvas.width - ball.radius){
        ball.moveX *= -1;
        ball.y -= 10
    }
     if(ball.x <  ball.radius){
        ball.moveX *= -1;
        ball.y -= 10
    }

    var zOffset = Math.cos(angle + tiltAngle);
    square.scale = 1.0 * (zOffset * 0.6);

    
    // for(var i = 0; i < objs.length; i++){
    //     objs[i].drawCircle();

    //     //Check for boundaries
    //     if(objs[i].x > canvas.width - objs[i].radius){
    //         objs[i].moveX *= -1;
    //         objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
    //     }
    //     if(objs[i].y > canvas.height - objs[i].radius){
    //         objs[i].moveY *= -1;
    //         objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
    //     }
    //     if(objs[i].x < objs[i].radius){
    //         objs[i].moveX *= -1;
    //         objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
    //     }
    //     if(objs[i].y < objs[i].radius){
    //         objs[i].moveY *= -1;
    //         objs[i].color = `rgb(${setRandomValue(0,255)},${setRandomValue(0,255)},${setRandomValue(0,255)})`
    //     }


        // objs[i].x += objs[i].moveX;
        // objs[i].y += objs[i].moveY;
    // }


    //draws line from center circle to square 
    ctx.beginPath()
    ctx.moveTo(centerX,centerY);
    ctx.lineTo(square.x,square.y);
    ctx.strokStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();

    ball.x = centerX;
    ball.y = centerY;
    //draw the objects
    ball.drawCircle();
    square.drawSquare();
}