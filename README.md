# Unflatten

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![XO code style][xo-img]][xo]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/unflatten-object.svg
[npm]:             https://www.npmjs.com/package/@tadashi/unflatten-object
[ci-img]:          https://github.com/lagden/unflatten-object/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/unflatten-object/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/unflatten-object/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/unflatten-object?branch=master
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo

-----

Unflatten a flat object

## Install

```
$ npm i -S @tadashi/unflatten-object
```


## Usage

```js
const unflatten = require('@tadashi/unflatten-object')

const unflat = unflatten({
  'a.b.c': 'foo',
  'a.d': 'bar'
})
// => {
//      a: {
//        b: {
//          c: 'foo'
//        },
//        d: 'bar'
//      }
//    }
```


## License

MIT © [Thiago Lagden](http://lagden.in)
