/**
Generate a verification code for the user to provide at https://scratch.mit.edu/projects/440710593. This is just a convenience method; you can use any numerical code.

@returns A 6-digit number.

@example
```
const scratchVerify = require("scratch-verify")

console.log(scratchVerify.createCode())
//=> 435543
```
*/
export declare function createCode(): string

/**
Verify whether the user is authenticated.

@param username The username to authenticate.
@param code The code to check for.
@returns Whether the user has authenticated.

@example
```
const scratchVerify = require("scratch-verify")

// If the user has authenticated
console.log(await scratchVerify.verifyCode("RichieNB", 435543))
//=> true
```
*/
export declare function verifyCode(username: string, code: string | number, options?: {
	/**
	The maximum amount of milliseconds that can pass since the user provided the code before it is no longer accepted.

	@default Infinity
	*/
	completionTimeout?: number
}): Promise<boolean>
