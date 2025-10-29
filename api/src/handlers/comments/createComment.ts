import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface CreateCommentBody {
    page_id: number
    created_by: string
    content: string
}

export default async function createCommentHandler(
    req: FastifyRequest<{ Body: CreateCommentBody }>,
    res: FastifyReply
) {
    try {
        const query = await loadSQL('comments/createComment.sql')
        const result = await run(query, [
            req.body.page_id,
            req.body.created_by,
            req.body.content
        ])
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to create comment' })
    }
}