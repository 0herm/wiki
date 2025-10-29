import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface DeletePageParams {
    id: string
}

export default async function deletePageHandler(
    req: FastifyRequest<{ Params: DeletePageParams }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const query = await loadSQL('pages/deletePage.sql')
        const result = await run(query, [parseInt(id)])
        const success = (result.rowCount ?? 0) > 0
        if (!success) {
            return res.status(404).send({ error: 'Page not found' })
        }
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to delete page' })
    }
}