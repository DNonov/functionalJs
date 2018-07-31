const {Map, List} = require("immutable-ext")
const {Sum} = require("./monoid")

// List of Monoids
const res = List.of(Sum(1), Sum(2), Sum(3))
	.fold(Sum.empty())
	//.reduce((acc, x) => acc.concat(x), Sum.empty())

// Map usually has values so we need to map them over Monoid
const res = Map({brian: 3, sara: 5})
	.map(Sum)
	.fold(Sum.empty())

// Geting values and maping them over Monoid and folding them is so common operation
// that there is foldMap
const res = Map({brian: 3, sara: 5})
	.foldMap(Sum, Sum.empty())
