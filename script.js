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

function Character(data) {
	Object.assign(this, data)
	// this.elementId = data.elementId
	// this.name = data.name
	// this.avatar = data.avatar
	// this.health = data.health
	// this.diceCount = data.diceCount
	
	this.getCharacterHtml = function() {
		const {elementId, name, avatar, health, diceCount} = this
		
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

const wizard = new Character(hero)
const orc = new Character(monster)
wizard.getCharacterHtml()
orc.getCharacterHtml()

getDiceRollArray(3)




// 4. Create two new instances of `Character`. One for a hero, 
//    called `wizard`, and one for a monster, called `orc`. 
//    Render both of them on the page.
// 5. Delete both the old `renderCharacter` function and the two 
//    lines of code at the bottom of the page which invoke that 
//    function.
// 















