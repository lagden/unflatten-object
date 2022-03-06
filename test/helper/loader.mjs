import {get} from 'node:https'

export function resolve(specifier, context, defaultResolve) {
	const {parentURL} = context

	if (specifier.startsWith('https://')) {
		return {
			url: specifier,
		}
	}

	if (parentURL && parentURL.startsWith('https://')) {
		return {
			url: new URL(specifier, parentURL).href,
		}
	}

	return defaultResolve(specifier, context, defaultResolve)
}

export function load(url, context, defaultLoad) {
	if (url.startsWith('https://')) {
		return new Promise((resolve, reject) => {
			get(url, res => {
				let data = ''
				res.on('data', chunk => {
					data += chunk
				})
				res.on('end', () => resolve({
					format: 'module',
					source: data,
				}))
			}).on('error', err => reject(err))
		})
	}

	return defaultLoad(url, context, defaultLoad)
}
