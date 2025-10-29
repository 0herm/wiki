import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface CreatePageVersionBody {
    page_id: number
    version_number: number
    content_diff: string
    edited_by: string
}

export default async function createPageVersionHandler(
    req: FastifyRequest<{ Body: CreatePageVersionBody }>,
    res: FastifyReply
) {
    try {
        const { page_id, version_number, content_diff, edited_by } = req.body
        const query = await loadSQL('page_versions/createPageVersion.sql')
        const result = await run(query, [page_id, version_number, content_diff, edited_by])
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to create page version' })
    }
}