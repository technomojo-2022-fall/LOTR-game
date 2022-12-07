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
}

function display() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

display()
















