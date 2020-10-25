const test = require("ava")
const size = require("any-size")
const stableFn = require("stable-fn")
const scratchVerify = require(".")

test(".createCode()", t => {
	t.false(stableFn(scratchVerify.createCode))

	const result = scratchVerify.createCode()
	t.is(typeof result, "number")
	t.is(size(result), 6)
})

test(".verify()", t => {
	t.is(typeof scratchVerify.verify, "function")
})
