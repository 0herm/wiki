import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface UpdateCommentParams {
    id: string
}

interface UpdateCommentBody {
    content: string
}

export default async function updateCommentHandler(
    req: FastifyRequest<{ Params: UpdateCommentParams; Body: UpdateCommentBody }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const { content } = req.body
        const query = await loadSQL('comments/updateComment.sql')
        const result = await run(query, [parseInt(id), content])
        res.send(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to update comment' })
    }
}