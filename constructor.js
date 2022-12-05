const healthyAnimal1 = {
	name: "Tony The Tiger",
	species: "tiger",
	weightKg: 56,
	age: 2,
	dateOfRelease: "03-08-2022"
}

const healthyAnimal2 = {
	name: "Violet the Velociraptor",
	species: "V. mongoliensis",
	weightKg: 15,
	age: 16,
	dateOfRelease: "03-08-2022"
}

function Animal(data) {
	this.name = data.name
	this.species = data.species
	this.weightKg = data.weightKg
	this.age = data.age
	this.dateOfRelease = data.dateOfRelease
	this.summarizeAnimal = function() {
		console.log(`${this.name} is a ${this.age} year old ${this.species} weighing ${this.weightKg} kilos and ran off into the wild on ${this.dateOfRelease}.`)
	}
}

const tonyTheTiger = new Animal(healthyAnimal1)
const violetTheVelo = new Animal(healthyAnimal2)

tonyTheTiger.summarizeAnimal()
violetTheVelo.summarizeAnimal()








