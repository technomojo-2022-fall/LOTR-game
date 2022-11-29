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
	
	let diceHTML = ""
	
	for (let i = 0; i < diceCount; i++) {
		diceHTML += `<div class="dice">${diceRoll[i]}</div>`
	}
	
	
	document.getElementById(elementId).innerHTML = `
		<div class="character-card">
			<h4 class="name"> ${name} </h4>
			<img class="avatar" src="${avatar}">
			<p class="health">health: <b> ${health} </b></p>
			<div class="dice-container">${diceHTML}</div>
		</div>
	`
}

renderCharacter(hero)
renderCharacter(monster)

// 1. Convert our consts into two objects called "monster" and "hero.”
// 2. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string and numbers. This should reduce the number of arguments to pass in from five to one.
// 3. Update the template now each variable is coming from "data.”
// 4. Update the function call.
















