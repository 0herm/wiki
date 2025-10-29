import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

export default async function getPagesHandler(req: FastifyRequest, res: FastifyReply) {
    try {
        const query = await loadSQL('pages/getPages.sql')
        const result = await run(query)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch pages' })
    }
}