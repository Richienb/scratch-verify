# scratch-verify [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/scratch-verify/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/scratch-verify)

Verify the ownership of a Scratch account.

[![NPM Badge](https://nodei.co/npm/scratch-verify.png)](https://npmjs.com/package/scratch-verify)

## Install

```sh
npm install scratch-verify
```

## Usage

```js
const { createCode, verifyCode } = require("scratch-verify")

// The user should go to https://scratch.mit.edu/projects/440710593 and provide `code`
const code = createCode()

// Verify if the user provided it
const isVerified = await verifyCode(username, code)
```

## API

### scratchVerify.createCode()

Generate a verification code for the user to provide at https://scratch.mit.edu/projects/440710593. This is just a convenience method; you can use any numerical code. Returns a 6-digit number.

```js
const scratchVerify = require("scratch-verify")

console.log(scratchVerify.createCode())
//=> "435543"
```

### scratchVerify.verifyCode(username, code, options?)

Verify whether the user is authenticated.

#### username

Type: `string`

The username to authenticate.

#### code

Type: `string | number`

The code to check for.

#### options

Type: `object`

##### completionTimeout

Type: `number`\
Default: `Infinity`

The maximum amount of milliseconds that can pass since the user provided the code before it is no longer accepted.

```js
const scratchVerify = require("scratch-verify")

// If the user has authenticated
console.log(await scratchVerify.verify("RichieNB", "435543"))
//=> true
```
