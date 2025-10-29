import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface DeleteCommentParams {
    id: string
}

export default async function deleteCommentHandler(
    req: FastifyRequest<{ Params: DeleteCommentParams }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const query = await loadSQL('comments/deleteComment.sql')
        await run(query, [parseInt(id)])
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to delete comment' })
    }
}