import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface CreateTagBody {
    name: string
    color?: string | null
}

export default async function createTagHandler(
    req: FastifyRequest<{ Body: CreateTagBody }>,
    res: FastifyReply
) {
    try {
        const tagData = {
            name: req.body.name,
            color: req.body.color ?? null
        }
        const query = await loadSQL('tags/createTag.sql')
        const result = await run(query, [tagData.name, tagData.color])
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to create tag' })
    }
}