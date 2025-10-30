import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetPagesQuery {
    parent_id?: string
}

export default async function getPagesHandler(req: FastifyRequest<{ Querystring: GetPagesQuery }>, res: FastifyReply) {
    try {
        const { parent_id } = req.query
        const query = await loadSQL('pages/getPages.sql')
        const params: SQLParamType[] = parent_id ? [parseInt(parent_id)] : [null]
        const result = await run(query, params)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch pages' })
    }
}