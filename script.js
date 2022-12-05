const hero = {
	elementId: "hero",
	name: "Wizard",
	avatar: "images/wizard.png",
	health: "60",
	diceCount: 3
}

const monster = {
	elementId: "monster",
	name: "Orc",
	avatar: "images/orc.png",
	health: "10",
	diceCount: 1
}


function renderCharacter(data) {
	const {elementId, name, avatar, health, diceCount} = data
	
	const diceHTML = getDiceHtml(diceCount)
	
	
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

// 1. Create a new constructor function called `Character` which
//    takes our data as a parameter.
// 2. Set up `this` for each of the five properties in our objects
//    (for example: `this.health = data.health`).
// 3. Then create a method called `getCharacterHtml` that performs the 
//    same tasks as our current `renderCharacter` function.
// 4. Create two new instances of `Character`. One for a hero, 
//    called `wizard`, and one for a monster, called `orc`. 
//    Render both of them on the page.
// 5. Delete both the old `renderCharacter` function and the two 
//    lines of code at the bottom of the page which invoke that 
//    function.
// 















