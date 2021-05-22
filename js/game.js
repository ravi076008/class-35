class Game{
constructor(){
}

getGameState(){
 var address=db.ref('/gameState')
    address.on("value",function(data){
    gameState=data.val();

    }
    )


}
updateGameState(State){
  var address2=db.ref('/')
  address2.update({
      gameState:State 
  })
}
start(){
form.display()
player.getPlayercount()


}
}
