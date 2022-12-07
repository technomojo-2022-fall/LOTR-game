import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
	Object.assign(this, data)
	
	this.diceArray = getDicePlaceholderHtml(this.diceCount)
	
	this.getDiceHtml = function(diceCount) {
		this.currentDiceScore = getDiceRollArray(this.diceCount)
		this.diceArray = this.currentDiceScore.map(function(number) {
			return `<div class="dice">${number}</div>`
		}).join("")
	}
	
	this.takeDamage = function(attackScoreArray) {
		console.log(`${this.name}: ${attackScoreArray}`)
	}
	
	this.getCharacterHtml = function() {
		const {elementId, name, avatar, health, diceCount, diceArray} = this
		const diceHTML = this.getDiceHtml(diceCount)
		
		return `
			<div class="character-card">
				<h4 class="name"> ${name} </h4>
				<img class="avatar" src="${avatar}">
				<p class="health">health: <b> ${health} </b></p>
				<div class="dice-container">
					${diceArray}
				</div>
			</div>
		`
	}
}

export default Character

// 1. In the Character constructor, create a new property called "diceArray".
// 2. Set diceArray equal to whatever is returned by the getDicePlaceholderHtml function (there are two things you need to make this work!)
// 3. Instead of rendering diceHtml in the getCharacterHtml method, render diceArray.
// 4. Delete any unnecessary code.




