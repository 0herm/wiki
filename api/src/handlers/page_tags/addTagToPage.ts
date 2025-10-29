import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface AddTagToPageBody {
    page_id: number
    tag_id: number
}

export default async function addTagToPageHandler(
    req: FastifyRequest<{ Body: AddTagToPageBody }>,
    res: FastifyReply
) {
    try {
        const { page_id, tag_id } = req.body
        const query = await loadSQL('page_tags/addTagToPage.sql')
        await run(query, [page_id, tag_id])
        res.status(201).send({ message: 'Tag added to page' })
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to add tag to page' })
    }
}