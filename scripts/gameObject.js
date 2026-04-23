//Basic GameObject
function createGameObject() {
    var obj = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 25,
        height: 25,
        color: "red",
        radius: 25,
        speed:2,
        scale:1,
        moveX:setRandomDirection(),
        moveY:setRandomDirection(),
        drawCircle: function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        },
        drawSquare:function(){
            ctx.save();
            ctx.translate(this.x,this.y);
            ctx.fillStyle = this.color;
            ctx.scale(this.scale, this.scale);
            ctx.fillRect(-this.width/2, -this.height/2, this.width,this.height);
            ctx.restore()
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