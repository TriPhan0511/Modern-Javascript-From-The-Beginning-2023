function Player(name, lvl = 1, points = 0) {
  this.name = name
  this.lvl = lvl
  this.points = points
}

Player.prototype.gainXp = function(number){
  if (number < 1 || number > 10) {
    return
  }
}

let player1 = new Player('Bob')
let player2 = new Player('Alice')

console.log(player1)
