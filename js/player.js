class Player{
  constructor(){
   this.name=null;
   this.distance=0;
   this.playerCount=null;
  }
  getPlayercount(){
   var address=db.ref('/playercount') ; 
      address.on("value",function(data){
       playerCount=data.val();


      })


  }
  getAllPlayers(){
    var address2=db.ref('/players');
        address2.on("value",function(data){
         allPlayers=data.val();

        })



  }
  updatePlayerCount(count){
      var address3=db.ref("/")
      address3.update({playercount:count})

  }
  writePlayers(){
      var address4=db.ref('/players/player'+this.playerCount)
      address4.set({name:this.name,distance:this.distance})

  }
}