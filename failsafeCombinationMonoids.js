/**
 * Monoid is semigroup with identity element. 
 */

const Sum = x =>
	({
		x,
		concat: ({x: y}) => Sum(x + y)
		inspect: () => `Sum(${x})` 
	})

// 0 appears to be the identity element for the Sum semigroup
// 1 + 0 = 1
// 2 + 0 = 2
// 3 + 0 = 3
Sum.empty = () => Sum(0)
const res = Sum.empty().concat(Sum(1).concat(Sum(2)))

const All = x =>
	({
		x,
		concat: ({x: y}) => All(x && y)
		inspect: () => `All(${x})` 
	})

// true apears to be the identity element for the All semigroup
// true && true = true
// false && true = true
All.empty = () => All(true)
const res = All.empty().concat(All(true).concat(All(true)))

// First is not a Monoid cause hasn't got identity element
const First = x =>
	({
		x,
		concat: _ => First(x)
		inspect: () => `First(${x})` 
	})

//This will return the identity element in case we pass empty array
const sum = xs =>
	xs.reduce((acc, x) => acc + x, 0)

//This will return the identity element in case we pass empty array
const all = xs =>
	xs.reduce((acc, x) => acc && x, true)

//This will blow up if we pass empty array since is semigroup and hasn't
//got identity element
const first = xs =>
	xs.reduce((acc, x) => acc)
