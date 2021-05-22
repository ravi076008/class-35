class Form{
constructor(){
this.input=createInput("enter your name")
this.button=createButton("play")
this.greeting=createElement("h1")
}
display(){
  this.input.position(0,0);

  this.button.position(10,10);
  this.button.mousePressed(function(){
    var value=this.input.value();
    player.name=value;
    playerCount=playerCount+1;
    player.playerCount=playerCount
    player.updatePlayerCount(playerCount)
    player.writePlayers()
    this.greeting.html("hello"+player.name)
    this.greeting.position(250,250)
  })
 


}

}