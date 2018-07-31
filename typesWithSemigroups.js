/**
 * Semigroup is type with concat method on it. 
 */

//const res = "a".concat("b").concat("c")
//const res = [1,2].concat([3,4]).concat([5,6])
// Semigroups are associative
//const res = [1,2].concat([3,4].concat([5,6]))

const Sum = x =>
	({
		x,
		concat: ({x: y}) => Sum(x + y)
		inspect: () => `Sum(${x})` 
	})

const res = Sum(1).concat(Sum(2)) // Sum(3)

const All = x =>
	({
		x,
		concat: ({x: y}) => All(x && y)
		inspect: () => `All(${x})` 
	})

const res = All(true).concat(All(false)) // All(false)

const First = x =>
	({
		x,
		concat: _ => First(x)
		inspect: () => `First(${x})` 
	})

const res = First("blah").concat(First("ice cream")) // First("blah")
