// make a function that takes in a single parameter
// and returns a new promise. after 500 milliseconds, the promise will either
// resolve or reject randomly with the input.
// further down the chain - we take the value if transform it to uppercase,
// make sure to catch all possible error and log them
function promisfiedSetTimeout(delay, cb = () => {
}) {
	return new Promise((resolve, reject) => {
		setTimeout(cb, delay)
	});
}

async function delayedValue(value) {
	await promisfiedSetTimeout(500);
	if (Math.random() > 0.5) {
		return value;
	} else {
		throw value
	}
}

async function delayedUppercase(v) {
	try {
		const val = await delayedValue(v);
		return val.toUpperCase()
	} catch (e) {
		console.error(e)
	}
}

//
delayedUppercase('aaa').then(console.log, console.error)
delayedUppercase('b').then(console.log, console.error)
delayedUppercase([]).then(console.log, console.error)
//
