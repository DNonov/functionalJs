/**
 * Case #1 
 */
const openSite = () => {
	if(current_user) {
		return renderPage(current_user)
	} else {
		return showLogin()
	}
}

const openSite = () =>
	fromNullable(current_user)
		.fold(showLogin, renderPage)

/**
 * Case #2 
 */
const getPrefs = user => {
	if(user.premium) {
		return loadPrefs(user.preferences)
	} else {
		return defaultPrefs
	}
}

const getPrefs = user =>
	(user.premium ? Right(user) : Left("not premium"))
		.map(user => user.preferences)
		.fold(() => defaultPrefs,
					prefs => loadPrefs(prefs))

/**
 * Case #3 
 */
const streetName = user => {
	const address = user.adress
	if(adress) {
		const street = address.street
		if(street) {
			return street.name
		}
	}
	return "no street"
}

const streetName = user =>
	fromNullable(user.address)
		.chain(adress => fromNullable(adress.street))
		.map(street => street.name)
		.fold(error => "no street",
					name => name)

/**
 * Case #4 
 */
const concatUniq = (x, ys) => {
	const found = ys.filter(y => y === x)[0]
	return found ? ys : ys.concat(x)
}

const concatUniq = (x, ys) =>
	fromNullable(ys.filter(y => y === x)[0])
		.fold(() => ys.concat(x),
					y => ys)

/**
 * Case #5 
 */
const wrapExample = example => {
	if(example.previewPath) {
		try {
			example.preview = fs.readFileSync(example.previewPath)
		} catch(error) {}
	}
	return example
}

const readFile = x => tryCatch(() => fs.readFileSync(x))
const wrapExample = example =>
	fromNullable(example.previewPath)
		.chain(readFile)
		.fold(() => example,
					example => Object.assign({preview: p}, example))


/**
 * Case #6 
 */
const parseDbUrl = cfg => {
	try {
		const c = JSON.parse(cfg)
		if(c.url) {
			return c.url.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
		}
	} catch(error) {
		return null
	}
}

const parseDbUrl = cfg =>
	tryCatch(() => JSON.parse(cfg))
		.chain(c => fromNullable(c.url))
		.fold(error => null,
					u => u.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/))
