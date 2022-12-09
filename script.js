import {characterData} from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById("attack-button").addEventListener("click", attack)

function attack() {
	wizard.getDiceHtml()
	orc.getDiceHtml()
	wizard.takeDamage(orc.currentDiceScore)
	orc.takeDamage(wizard.currentDiceScore)
	display()
	if (wizard.dead || orc.dead) {
		endGame()
	}
}

function endGame() {
	let endMessage = (wizard.health === 0 && orc.health === 0) ?
	"No one wins. Thermonuclear war." :
	wizard.health > 0 ? "Wizzie Wins." :
	"Orc wins."

	const endEmoji = wizard.health > 0 ? "🧙‍♀️" : "👻"
	document.body.innerHTML =
		`<div class = "end-game">
			<h2>Game Over</h2>
			<h3>${endMessage}</h3>
			<p class = "end-emoji">${endEmoji}</p>
			</div>
		`
	console.log(endMessage)
}

function display() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

display()
















