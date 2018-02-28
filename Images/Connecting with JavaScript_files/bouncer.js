var age = Number(prompt('How old are you?'))

if(age <= 0) {
	console.log("Come back once you're out of the womb...")
}

if(age < 18) {
	console.log('You cannot come in because you are too young.')
}

else if(age < 21) {
	console.log("You can come in, but you can't drink.")
}

else {
	console.log("Come on in. You can drink!")
}