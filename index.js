"use strict"
const got = require("got")
const cryptoRandomString = require("crypto-random-string")

exports.createCode = () => Number(cryptoRandomString({
	length: 1,
	characters: "123456789"
}) + cryptoRandomString({
	length: 5,
	type: "numeric"
}))

exports.verify = async (username, code, { completionTimeout = Infinity } = {}) => {
	const cloudData = await got("https://clouddata.scratch.mit.edu/logs", {
		searchParams: {
			projectid: 440710593,
			limit: 1000,
			offset: 0
		},
		responseType: "json",
		resolveBodyOnly: true
	})

	return cloudData.some(({ user, verb, name, value, timestamp }) => verb === "set_var" &&
		name === "☁ Verification code" &&
		user === username &&
		value === code.toString() &&
		timestamp >= Date.now() - completionTimeout)
}
