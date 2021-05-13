function load_image(){
    //players,gems,virus
    virus_img=new Image();
    virus_img.src="Assets/v1.png";
    player_img=new Image;
    player_img.src="Assets/superhero.png";
    gem_img=new Image;
    gem_img.src="Assets/gemm.png";
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
    player={
        x:20,
        y:H/2,
        w:60,
        h:60,
        speed:20,
        moving:false,
    };
    gem={
        x:W-100,
        y:H/2,
        w:60,
        h:60,
    };
    enemy=[v1,v2,v3];
    canvas.addEventListener('mousedown',function(){
        player.moving=true;
    });
    canvas.addEventListener('mouseup',function(){
        player.moving=false;
    });
}
//Collision Detection Function
function isOverlap(rect1,rect2){
    if(rect1.x+rect1.w>=rect2.x && rect1.y+rect1.h>=rect2.y&&rect2.x+rect2.w>=rect1.x && rect2.y+rect2.h>=rect1.y){
        return true;
    }
}
function draw(){
    //clear the canvas area for old frame
    pen.clearRect(0,0,W,H);
    pen.drawImage(player_img,player.x,player.y,player.w,player.h);
    pen.drawImage(gem_img,gem.x,gem.y,gem.w,gem.h);
    for(var i=0;i<enemy.length;i++){
        pen.drawImage(virus_img,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
    
}
function update(){
    //check Overlap between player and gem
    if(isOverlap(player,gem)){
        alert("Game Over.YOU WON");
    }
    //Player Movement
    if(player.moving==true){
        player.x+=player.speed;
    }
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