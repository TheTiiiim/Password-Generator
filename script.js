function generatePassword(
	length = 8,
	withLowerCharacters = true,
	withUpperCharacters = false,
	withNumeralCharacters = false,
	withSpecialCharacters = false
) {
	//character pools
	const lowerCharacters = "abcdefghijklmnopqurstuvwxyz";
	const upperCharacters = lowerCharacters.toUpperCase();
	const numeralCharacters = "0123456789";
	const specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

	//instance character pool
	let characterSet = "";

	if (withLowerCharacters) {
		characterSet += lowerCharacters;
	}

	if (withUpperCharacters) {
		characterSet += upperCharacters;
	}

	if (withNumeralCharacters) {
		characterSet += numeralCharacters;
	}

	if (withSpecialCharacters) {
		characterSet += specialCharacters;
	}

	let result = "";

	for (let i = 0; i < length; i++) {
		let seed = Math.random();
		let charNum = Math.floor(Math.random() * characterSet.length);
		result += characterSet[charNum];
	}

	return result;
}


