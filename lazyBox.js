const LazyBox = g =>
	({
		map: f => LazyBox(() => f(g()))
		fold: f => f(g()) 
	})

// fold act as trigger of the LazyBox
// a lot of types define map that way not passing value but function
// (Promises, Observables, Streams)
const result = LazyBox(() => "64")
		.map(abba => abba.trim())
		.map(trimmed => new Number(trimmed))
		.map(number => number + 1)
		.map(x => String.fromCharCode(x))
		.fold(x => x.toLowerCase())
