
// 1st law
fx.map(f).map(g) == fx.map(x => g(f(x))) 

const res1 = Box("squirels")
	.map(s => s.substr(5))
	.map(s => s.toUpperCase())

const res2 = Box("squirels")
	.map(s => s.substr(5).toUpperCase())

console.log(res1 === res2) // true

// 2nd law
fx.map(id) === id(fx)

const res1 = Box("crayons").map(id)
const res2 = id(Box("crayons"))

console.log(res1 === res2) // true
