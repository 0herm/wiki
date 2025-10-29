import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetPageParams {
    id?: string
    slug?: string
}

export default async function getPageHandler(req: FastifyRequest<{ Params: GetPageParams }>, res: FastifyReply) {
    try {
        const { id, slug } = req.params
        let query: string
        let params: SQLParamType[]
        if (id) {
            query = await loadSQL('pages/getPageById.sql')
            params = [parseInt(id)]
        } else if (slug) {
            query = await loadSQL('pages/getPageBySlug.sql')
            params = [slug]
        } else {
            return res.status(400).send({ error: 'Either id or slug must be provided' })
        }
        const result = await run(query, params)
        const page = result.rows[0] || null
        if (!page) {
            return res.status(404).send({ error: 'Page not found' })
        }
        res.send(page)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch page' })
    }
}