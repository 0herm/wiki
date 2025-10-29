import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface GetCommentsParams {
    pageId: string
}

export default async function getCommentsHandler(
    req: FastifyRequest<{ Params: GetCommentsParams }>,
    res: FastifyReply
) {
    try {
        const { pageId } = req.params
        const query = await loadSQL('comments/getComments.sql')
        const result = await run(query, [parseInt(pageId)])
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to fetch comments' })
    }
}