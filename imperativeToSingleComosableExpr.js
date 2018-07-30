const Box = x =>
	({
		map: f => Box(f(x))
		fold: f => f(x)
		inspect: () => `Box(${x})`
	})

/**
 * Imperative version 
 */

const moneyToFloat = str =>
	parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
	const repaced = str.replace(/\%/g, '')
	const number = parseFloat(replaced)
	const number = 0.01
}

const applyDiscount = (price, discount) => {
	const cost = moneyToFloat(price)
	const savings = priceToFloat(discount)
	return cost - cost * savings
}

/**
 * Functional version 
 */
const moneyToFloat = str =>
	Box(str)
		.map(s => s.replace(/\$/g, ''))
		.map(r => parseFloat(r))

const percentToFloat = str => {
	Box(str.replace(/\%/g, ''))
		.map(repaced => parseFloat(replaced))
		.map(number => number * 0.01)

// We have to fold it twice cause we nest
// it in order to capture "cost" in closure.
const applyDiscount = (price, discount) => {
	moneyToFloat(price)	
		.fold(cost =>
			precentToFloat(discount)
				.fold(savings =>
					cost - cost * savings))
}

const result = applyDiscount('$5.00', '20%')
console.log(result)
