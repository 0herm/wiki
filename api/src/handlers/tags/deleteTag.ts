import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface DeleteTagParams {
    id: string
}

export default async function deleteTagHandler(
    req: FastifyRequest<{ Params: DeleteTagParams }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const query = await loadSQL('tags/deleteTag.sql')
        await run(query, [parseInt(id)])
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to delete tag' })
    }
}