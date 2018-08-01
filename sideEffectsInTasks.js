const Task = require("data.task") // Folktale lib

Task.of(1)
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // success 1

Task.reject(1)
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // err 1

Task.of(1)
	.map(x => x + 1)
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // success 2

Task.of(1)
	.map(x => x + 1)
	.chain(x => Task.of(x + 1))
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // success 3

Task.reject(1)
	.map(x => x + 1)
	.chain(x => Task.of(x + 1))
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // err 1

const launchMissiles = () =>
	new Task((rej, res) => {
		console.log("launch missiles!")
		res("missile")
	})

launchMissiles()
	.map(x => x + "!")
	.fork(e => console.log("err", e),
				x => console.log("success", x)) // launch missiles! success missile!
