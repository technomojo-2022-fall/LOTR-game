var cowArray = [6, 11, 4]

const totalNumberOfCows = cowArray.reduce(function(total, currentElementValue) {
	console.log("The total: " + total, "The current array element: " + currentElementValue)
	return total + currentElementValue
})

console.log(totalNumberOfCows)

