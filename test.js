const test = require("ava")
const size = require("any-size")
const stableFn = require("stable-fn")
const scratchVerify = require(".")

test(".createCode()", t => {
	t.false(stableFn(scratchVerify.createCode))

	const result = scratchVerify.createCode()
	t.is(typeof result, "string")
	t.is(size(result), 6)
})

test(".verifyCode()", t => {
	t.is(typeof scratchVerify.verifyCode, "function")
})
