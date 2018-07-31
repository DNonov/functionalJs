/**
 * There is a game and Nico accidentally made two accounts
 * so we need to merge them together.
 */
const {Map} = require("immutable-ext")

const Sum = x =>
	({
		x,
		concat: ({x: y}) => Sum(x + y)
		inspect: () => `Sum(${x})` 
	})

const All = x =>
	({
		x,
		concat: ({x: y}) => All(x && y)
		inspect: () => `All(${x})` 
	})

const First = x =>
	({
		x,
		concat: _ => First(x)
		inspect: () => `First(${x})` 
	})

// If data structure is entirely made up of semigroups it will be semigroup itself.
const acc1 = Map({name: First("Nico"), isPaid: All(true), points: Sum(10), friends: ["Franklin"]})
const acc1 = Map({name: First("Nico"), isPaid: All(false), points: Sum(2), friends: ["Gatsby"]})

const res = acc1.concat(acc2)
console.log(res.toJS())
