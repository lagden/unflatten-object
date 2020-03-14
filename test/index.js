/* eslint camelcase:0 */
'use strict'

const test = require('ava')
const unflatten = require('..')

test('basic', t => {
	const flat = {
		'a.b.c': 'foo',
		'a.d': 'bar'
	}
	const unflat = unflatten(flat)
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":"foo"},"d":"bar"}}')
})

test('separator', t => {
	const flat = {
		a__b__c: 'foo',
		a__d: 'bar'
	}
	const unflat = unflatten(flat, '__')
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":"foo"},"d":"bar"}}')
})

test('array', t => {
	const flat = {
		a__b__c: ['x', 'y', {z: 'foo'}],
		a__d: 'bar'
	}
	const unflat = unflatten(flat, '__')
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":["x","y",{"z":"foo"}]},"d":"bar"}}')
})
