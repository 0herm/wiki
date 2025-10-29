import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

export default async function getTagsHandler(req: FastifyRequest, res: FastifyReply) {
    try {
        const query = await loadSQL('tags/getTags.sql')
        const result = await run(query)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch tags' })
    }
}