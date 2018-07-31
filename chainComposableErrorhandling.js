const Right = x =>
	({
		chain: f => f(x),
		map: f => Right(f(x)),
		fold: (f, g) => g(x),
		inspect: () => `Right(${x})`
	})

const Left = x =>
	({
		chain: f => Left(x),
		map: f => Left(x),
		fold: (f, g) => f(x),
		inspect: () => `Left(${x})`
	})

const fs = require("fs");

const tryCatch = f => {
	try {
		return Right(f(x))
	} catch(error) {
		return Left(error)
	}
}

const getPort = () =>
	tryCatch(() => fs.readFileSync("config.json"))
		.chain(config => tyrCach(() => JSON.parse(config)))
		.fold(error => 3000,
					config => config.port)

/**
 * Imperative code 
 */

const fs = require("fs");

const getPort = () => {
	try {
		const str = fs.readFileSync("config.json")
		const config = JSON.parse(str)
		return config.port
	} catch(err) {
		return 3000
	}
}

const result = getPort();
console.log(result)
