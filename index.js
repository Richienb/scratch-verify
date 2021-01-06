"use strict"
const axios = require("axios")
const cryptoRandomString = require("crypto-random-string")

exports.createCode = () => Number(cryptoRandomString({
	length: 1,
	characters: "123456789"
}) + cryptoRandomString({
	length: 5,
	type: "numeric"
}))

exports.verify = async (username, code, { completionTimeout = Infinity } = {}) => {
	const {data: cloudData} = await axios("https://clouddata.scratch.mit.edu/logs", {
		params: {
			projectid: 440710593,
			limit: 1000,
			offset: 0
		},
		responseType: "json"
	})

	return cloudData.some(({ user, verb, name, value, timestamp }) => verb === "set_var" &&
		name === "☁ Verification code" &&
		user === username &&
		value === code.toString() &&
		timestamp >= Date.now() - completionTimeout)
}
