var keydown = document.addEventListener("keydown", keyDown);
var keyup = document.addEventListener("keydown", keyUp);

var w = false;
var a = false;
var s = false;
var d = false;


function keyDown(e){
    console.log(e.key)
    if(e.key == "w"){
        w = true;
        console.log(w)
    }
    if(e.key == "a"){
        a = true;
    }
    if(e.key == "s"){
        s = true;
    }
    if(e.key == "d"){
        d = true;
    }
}

function keyUp(e){
    console.log(e.key)
    if(e.key == "w"){
        w = false;
        
    }
    if(e.key == "a"){
        a = false;
    }
    if(e.key == "s"){
        s = false;
    }
    if(e.key == "d"){
        d = false;
    }
}