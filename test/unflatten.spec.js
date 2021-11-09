import test from 'ava'
import timekeeper from 'timekeeper'
import unflatten from '../src/unflatten.js'

test.before(() => {
	timekeeper.freeze(1_604_416_038 * 1000)
})

test.after(timekeeper.reset)

test('basic', t => {
	const flat = {
		'a.b.c': 'foo',
		'a.d': 'bar',
	}
	const unflat = unflatten(flat)
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":"foo"},"d":"bar"}}')
})

test('separator', t => {
	const flat = {
		a__b__c: 'foo',
		a__d: 'bar',
	}
	const unflat = unflatten(flat, '__')
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":"foo"},"d":"bar"}}')
})

test('array', t => {
	const flat = {
		a__b__c: ['x', 'y', {z: 'foo'}],
		a__d: 'bar',
	}
	const unflat = unflatten(flat, '__')
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":["x","y",{"z":"foo"}]},"d":"bar"}}')
})

test('date', t => {
	const flat = {
		a__b__c: ['x', 'y', {z: new Date(1_518_375_593_748)}],
		a__d: 'bar',
	}
	const unflat = unflatten(flat, '__')
	t.is(JSON.stringify(unflat), '{"a":{"b":{"c":["x","y",{"z":"2018-02-11T18:59:53.748Z"}]},"d":"bar"}}')
})
