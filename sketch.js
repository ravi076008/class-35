var db,gameState,playerCount,form,game,player,allPlayers
function setup(){
    createCanvas(500,500);
  db=firebase.database()
  form=new Form()
  game=new Game()
  player=new Player()
  game.getGameState();
  if(gameState==0){
  game.start();

  }
}

function draw(){
    background("yellow");
    
}

