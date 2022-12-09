import characterData from "./data.js"
import Character from "./Character.js"

let monsterArray = ["orc", "smeagol", "cavetroll"]
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

document.getElementById("attack-button").addEventListener("click", attack)

function getNewMonster() {
	const nextMonsterData = characterData[monsterArray.shift()]
	return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
	wizard.getDiceHtml()
	monster.getDiceHtml()
	wizard.takeDamage(monster.currentDiceScore)
	monster.takeDamage(wizard.currentDiceScore)
	display()
	if(wizard.dead) {
		endGame()
	} else if(monster.dead) {
		if(monsterArray.length > 0) {
			monster = getNewMonster()
			display()
		} else {
			endGame()
		}
	}
}

function endGame() {
	let endMessage = wizard.health === 0 && monster.health === 0 ? "No one wins. Thermonuclear war." : wizard.health > 0 ? "Gandalf wins!" : "Monster wins"

	const endEmoji = wizard.health > 0 ? "🎩" : "👻"
	document.body.innerHTML =
		`<div class = "end-game">
			<h2>Game Over</h2>
			<h3>${endMessage}</h3>
			<p class = "end-emoji">${endEmoji}</p>
		</div>`
}

function display() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

display()
