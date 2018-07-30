// The old version
const nextCharForNumberString = str => {
	const trimmed = str.trim()
	const number = parseInt(trimmed)
	const nextNumber = number + 1
	return String.fromCharCode(nextNumber)
}

// Using a box
const nextCharForNumberString = str =>
	[str]
		.map(s => s.trim())
		.map(s => parseInt(s))
		.map(i => i + 1)
		.map(i => String.fromCharCode(i))

// Using our own type 'box' (Identity functor)
const Box = x =>
	({
		map: f => Box(f(x))
		fold: f => f(x)
		inspect: () => `Box(${x})`
	})

const nextCharForNumberString = str =>
	Box(str)
		.map(s => s.trim())
		.map(s => parseInt(s))
		.map(i => i + 1)
		.map(i => String.fromCharCode(i))

const result = nextCharForNumberString('64')
console.log(result)
