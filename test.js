const test = require("ava")
const size = require("any-size")
const stableFn = require("stable-fn")
const scratchVerify = require(".")

test(".createCode()", t => {
	t.false(stableFn(scratchVerify.createCode))

	const code = scratchVerify.createCode()
	t.is(typeof code, "string")
	t.is(size(code), 6)
})

test(".verifyCode()", t => {
	t.is(typeof scratchVerify.verifyCode, "function")
})
