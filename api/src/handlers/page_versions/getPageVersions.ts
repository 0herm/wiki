import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetPageVersionsParams {
    pageId: string
}

export default async function getPageVersionsHandler(
    req: FastifyRequest<{ Params: GetPageVersionsParams }>,
    res: FastifyReply
) {
    try {
        const { pageId } = req.params
        const query = await loadSQL('page_versions/getPageVersions.sql')
        const result = await run(query, [parseInt(pageId)])
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch page versions' })
    }
}