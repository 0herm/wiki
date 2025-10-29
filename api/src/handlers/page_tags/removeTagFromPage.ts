import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface RemoveTagFromPageParams {
    pageId: string
    tagId: string
}

export default async function removeTagFromPageHandler(
    req: FastifyRequest<{ Params: RemoveTagFromPageParams }>,
    res: FastifyReply
) {
    try {
        const { pageId, tagId } = req.params
        const query = await loadSQL('page_tags/removeTagFromPage.sql')
        await run(query, [parseInt(pageId), parseInt(tagId)])
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to remove tag from page' })
    }
}