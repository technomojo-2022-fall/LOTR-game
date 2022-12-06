import {characterData} from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function display() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}
display()
getDiceRollArray(3)


// 1. Create a file called `utils.js`.
// 2. Cut and paste the getDiceRollArray() function into it.
// 3. Import back it into script.js as a default or named export.
// 4. Create a file called `Character.js`.
// 5. Cut and paste the Character constructor function into it.
// 6. Import back it into script.js as a default or named export.
// 7. You will hit a problem! Solve the problem by using the browser console for hints.

















