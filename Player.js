class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//static functions are the functions which are common to all the objects created using the class
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
 getCarsAtEnd(){
   var CarsAtEndRef=database.ref('CarsAtEnd');
   CarsAtEndRef.on("value",(data)=>{
     this.rank=data.val();
   })
  } 
   

  static updateCarsAtEnd(rank){
    // "/" refers to the root of the database.
   database.ref("/").update({
     CarsAtEnd:rank
   }) 
  }
}
