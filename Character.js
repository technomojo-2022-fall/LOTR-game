import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"


function Character(data) {
	Object.assign(this, data)

	this.diceArray = getDicePlaceholderHtml(this.diceCount)

	this.maxHealth = this.health

	this.getDiceHtml = function(diceCount) {
		this.currentDiceScore = getDiceRollArray(this.diceCount)
		this.diceArray = this.currentDiceScore.map((number) =>
			`<div class = "dice">${number}</div>`).join("")

	}

	this.takeDamage = function(attackScoreArray) {
		const totalAttackScore = attackScoreArray.reduce((total, currentNumber) => total + currentNumber)
		this.health -= totalAttackScore
		if(this.health <= 0) {
			this.dead = true
			this.health = 0
		}
	}

	this.getHealthBarHtml = function() {
		const percent = getPercentage(this.health, this.maxHealth)

		return `
			<div class = "health-bar-outer">
				<div class = "health-bar-inner ${percent < 26 ? "danger" : ""}"
				style = "width: ${percent}%"
			</div>
		`
	}

	this.getCharacterHtml = function() {
		const {elementId, name, avatar, health, diceCount, diceArray} = this
		const healthBar = this.getHealthBarHtml()
		const diceHtml = this.getDiceHtml(diceCount)

		return `
			<div class="character-card">
				<h4 class="name"> ${name} </h4>
				<img class="avatar" src="${avatar}">
				<p class="health">health: <b> ${health} </b></p>
				${healthBar}
				<div class="dice-container">${diceArray}</div>
			</div>
		`
	}
}

export default Character