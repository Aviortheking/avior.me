import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import Sitemap from 'easy-sitemap'

const projects = await getCollection('projects')


/**
 * sitemap generation
 */
export const ALL: APIRoute = async () => {
	const sitemap = new Sitemap('https://avior.me')
	sitemap.addEntry('/', {
		priority: 1
	})
	sitemap.addEntry('/projects/', {
		priority: 0.5
	})
	for (const project of projects) {
		sitemap.addEntry('/projects/' + project.slug, {
			priority: 0.7
		})
	}
	return new Response(sitemap.build(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	})
}
