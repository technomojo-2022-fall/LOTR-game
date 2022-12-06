const chessPlayerDetails = {
  firstName: "Magnus",
  lastName: "Carlsen",
  age: 31,
  country: "Norway",
  rating: 2882,
  fideRanking: 1
}

function chessPlayer(data) {
  Object.assign()
  this.summary = function(this, data) {
	console.log(`${this.firstName} ${this.lastName}, ${this.age} years old, is from ${this.country} and has a rating of ${this.rating}. ${this.firstName} is the number ${this.fideRanking} chess player in the world.`)
  }
}

const newChessPlayer = new chessPlayer(chessPlayerDetails)
newChessPlayer.summary()