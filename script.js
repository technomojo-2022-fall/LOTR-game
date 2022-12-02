const hero = {
	elementId: "hero",
	name: "Wizard",
	avatar: "images/wizard.png",
	health: "60",
	diceRoll: [3, 1, 4],
	diceCount: 3
}

const monster = {
	elementId: "monster",
	name: "Orc",
	avatar: "images/orc.png",
	health: "10",
	diceRoll: [2],
	diceCount: 1
}


function renderCharacter(data) {
	const {elementId, name, avatar, health, diceRoll, diceCount} = data
	
	const diceHTML = getDiceHtml(diceCount)
	
	// const diceHTML = diceRoll.map(function(number) {
	// 	return `<div class="dice">${number}</div>`
	// }).join("")
	
	
	document.getElementById(elementId).innerHTML = `
		<div class="character-card">
			<h4 class="name"> ${name} </h4>
			<img class="avatar" src="${avatar}">
			<p class="health">health: <b> ${health} </b></p>
			<div class="dice-container">${diceHTML}</div>
		</div>
	`
}

function getDiceRollArray(diceCount) {
	const newDiceRolls = []
	for (let i = 0; i < diceCount; i++) {
		newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
	}
	return newDiceRolls
}

function getDiceHtml(diceCount) {
	return getDiceRollArray(diceCount).map(function(number) {
		return `<div class="dice">${number}</div>`
	}).join("")
}

getDiceRollArray(3)

renderCharacter(hero)
renderCharacter(monster)

// 1. Create a function called getDiceHtml. 

// 2. getDiceHtml should map over the array of dice rolls returned from getDiceRollArray. Use that to generate the html for the dice with random values. Use this HTML: `<div class="dice">DICE VALUE HERE</div>`

// 3. Think about the parameters and arguments.

// 4. Down in renderCharacter(), set diceHtml equals to our new getDiceHtml function. Remember to give it the argument it needs. 

// 5. Delete any code we no longer need.
















