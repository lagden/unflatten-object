'use strict'

const merge = require('lodash.merge')

/**
 * Helper para desachatar uma chave
 *
 * @param {any} value          valor da chave
 * @param {string} flattenKey  chave achatada
 * @param {string} delim       símbolo usado para separar as chaves
 * @returns {object} Retorna um novo objeto aninhado
 */
function _unflatten(value, flattenKey, delim = '.') {
	const keys = flattenKey.split(delim)
	const size = keys.length - 1
	const out = Object.create(null)
	let remainder = keys
	let next = out
	for (let i = 0; i < size; i++) {
		if (!next[keys[i]]) {
			next[keys[i]] = Object.create(null)
			next = next[keys[i]]
		}
		remainder = remainder.slice(1)
	}
	next[remainder.join('')] = value
	return out
}

/**
 * Desachata o `objeto` que está em um único nível.
 *
 * @param {object} obj    objeto que será desachatado
 * @param {string} delim  símbolo usado para separar as chaves
 * @returns {object} Retorna um novo objeto aninhado
 */
function unflattenObject(obj, delim = '.') {
	const nobj = Object.create(null)
	for (const [key, val] of Object.entries(obj)) {
		merge(nobj, _unflatten(val, key, delim))
	}
	return nobj
}

module.exports = unflattenObject
