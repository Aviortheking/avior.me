import { defineMiddleware } from "astro/middleware"
import { buildRFC7807 } from '../libs/RFCs/RFC7807'
import ResponseBuilder from '../libs/ResponseBuilder'

// `context` and `next` are automatically typed
export default defineMiddleware(async ({ request, locals }, next) => {
	locals.responseBuilder = new ResponseBuilder()
	console.log(`[${new Date().toISOString()}] ${request.headers.get('user-agent')?.slice(0, 32).padEnd(32)} ${request.method.padEnd(7)} ${request.url}`)

	try {
		const res = await next()
		console.log(`[${new Date().toISOString()}] ${request.headers.get('user-agent')?.slice(0, 32).padEnd(32)} ${request.method.padEnd(7)} ${res.status} ${request.url}`)
		return res
	} catch (e) {
		console.error(e)
		return buildRFC7807({
			type: '/docs/errors/global-error',
			status: 500
		})
	}
})
