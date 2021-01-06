const askText = require("ask-text")
const pWaitFor = require("p-wait-for")
const scratchVerify = require(".")

module.exports = (async () => {
	const username = await askText("Enter your Scratch username: ")
	const code = scratchVerify.createCode()
	console.log(`Go to https://scratch.mit.edu/projects/440710593 and provide the code ${code}`)

	await pWaitFor(async () => scratchVerify.verifyCode(username, code), { interval: 2500, leadingCheck: false })

	console.log(`Verified as ${username}`)
})()
