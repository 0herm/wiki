import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface UpdateTagParams {
    id: string
}

interface UpdateTagBody {
    name: string
    color?: string | null
}

export default async function updateTagHandler(
    req: FastifyRequest<{ Params: UpdateTagParams; Body: UpdateTagBody }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const { name, color } = req.body
        const query = await loadSQL('tags/updateTag.sql')
        const result = await run(query, [parseInt(id), name, color ?? null])
        res.send(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to update tag' })
    }
}