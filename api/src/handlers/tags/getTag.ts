import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetTagParams {
    id: string
}

export default async function getTagHandler(
    req: FastifyRequest<{ Params: GetTagParams }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const query = await loadSQL('tags/getTagById.sql')
        const result = await run(query, [parseInt(id)])
        if (result.rows.length === 0) {
            res.status(404).send({ error: 'Tag not found' })
        } else {
            res.send(result.rows[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch tag' })
    }
}