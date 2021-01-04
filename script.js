$(function () {
	$('#passwordOptions').on("submit", function (e) {
		e.preventDefault(); // cancel the actual submit

		let options = $('#passwordOptions').serializeArray();

		let optionsObj = {
			length: 8,
			lower: false,
			upper: false,
			number: false,
			special: false
		};

		for (key in options) {
			if (options[key].name === "length") {
				optionsObj[options[key].name] = parseInt(options[key].value);
			} else {
				optionsObj[options[key].name] = (options[key].value === 'true');
			}
		}

		let isValid = true;

		if (isNaN(optionsObj.length)) {
			replaceResultReceiver("Password length input is Not a Number.");
			isValid = false;
		}

		if (!(optionsObj.lower || optionsObj.upper || optionsObj.number || optionsObj.special)) {
			replaceResultReceiver("Must include some characters.");
			isValid = false;
		}

		if (isValid) {
			let password = generatePassword(optionsObj.length, optionsObj.lower, optionsObj.upper, optionsObj.number, optionsObj.special);
			replaceResultReceiver(password);
		}
	});
});

function replaceResultReceiver(string) {
	$("#resultReceiver").text(string);
}


function generatePassword(
	length,
	withLowerCharacters,
	withUpperCharacters,
	withNumeralCharacters,
	withSpecialCharacters
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

	// generate password

	for (let i = 0; i < length; i++) {
		let seed = Math.random();
		let charNum = Math.floor(Math.random() * characterSet.length);
		result += characterSet[charNum];
	}

	return result;
}


