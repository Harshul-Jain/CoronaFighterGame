function load_image(){
    //players,gems,virus
}
function init(){
    // define all objects that we will have in the game
    canvas=document.getElementById('mycanvas');
    W=700;
    H=400;
    canvas.width=W;
    canvas.height=H;
    //get Context
    pen=canvas.getContext('2d');
    box={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:10,
    };
}
function draw(){
    //clear the canvas area for old frame
    pen.clearRect(0,0,W,H);
    pen.fillStyle="red";
    pen.fillRect(box.x,box.y,box.w,box.h);
    
}
function update(){
    //move the box downwards
    box.y+=box.speed;
    if(box.y>=H-box.h || box.y<0){
        box.speed*=(-1);
    }
    
}
function gameloop(){
    draw();
    update();
    
}
load_image();
init();
var f=setInterval(gameloop,100);