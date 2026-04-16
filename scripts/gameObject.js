//Basic GameObject
function createGameObject() {
    var obj = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 25,
        height: 25,
        color: "red",
        radius: 25,
        moveX:setRandomDirection(),
        moveY:setRandomDirection(),
        drawCircle: function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    return obj;
}

//Utility Functions
function setRandomValue(low, high){
    return Math.random() * (high - low) + low;
}

function setRandomDirection(){
    var dir = Math.random();
    if(dir>0.5){
        return setRandomValue(-3,3);
    }else{
        return  setRandomValue(-3,3);
    }
}