import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetPageTagsParams {
    pageId: string
}

export default async function getPageTagsHandler(
    req: FastifyRequest<{ Params: GetPageTagsParams }>,
    res: FastifyReply
) {
    try {
        const { pageId } = req.params
        const query = await loadSQL('page_tags/getPageTags.sql')
        const result = await run(query, [parseInt(pageId)])
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch page tags' })
    }
}