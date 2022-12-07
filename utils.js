function getDiceRollArray(diceCount) {
	return new Array(diceCount).fill(0).map(function() {
		return Math.floor(Math.random()*6) +1
	})
	
	// const newDiceRolls = []
	// for (let i = 0; i < diceCount; i++) {
	// 	newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
	// }
	// return newDiceRolls
}

function getDicePlaceholderHtml(diceCount) {
	return new Array(diceCount).fill(0).map(function() {
		return `<div class = "placeholder-dice"></div>`
	})
}

export {getDiceRollArray, getDicePlaceholderHtml}