function load_image(){
    //players,gems,virus
    virus_img=new Image();
    virus_img.src="Assets/v1.png";
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
    v1={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:15,
    };
    v2={
        x:300,
        y:150,
        w:60,
        h:60,
        speed:30,
    };
    v3={
        x:450,
        y:20,
        w:60,
        h:60,
        speed:40,
    };
    enemy=[v1,v2,v3];
}
function draw(){
    //clear the canvas area for old frame
    pen.clearRect(0,0,W,H);
    pen.fillStyle="red";
    for(var i=0;i<enemy.length;i++){
        pen.drawImage(virus_img,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
    
}
function update(){
    //move the virus
    for(var i=0;i<enemy.length;i++){
        enemy[i].y+=enemy[i].speed;
        if(enemy[i].y>=H-enemy[i].h || enemy[i].y<=0){
            enemy[i].speed*=-1;
        }
    }
    
    
}
function gameloop(){
    draw();
    update();
    
}
load_image();
init();
var f=setInterval(gameloop,100);