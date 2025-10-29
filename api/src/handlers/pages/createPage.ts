import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface CreatePageBody {
    title: string
    slug: string
    parent_id?: number | null
    content?: string | null
    description?: string | null
    edited_by: string
    tag_ids?: number[]
}

export default async function createPageHandler(req: FastifyRequest<{ Body: CreatePageBody }>, res: FastifyReply) {
    try {
        const body = req.body
        const pageData = {
            title: body.title,
            slug: body.slug,
            parent_id: body.parent_id ?? null,
            content: body.content ?? null,
            description: body.description ?? null,
            edited_by: body.edited_by
        }
        const query = await loadSQL('pages/createPage.sql')
        const result = await run(query, [
            pageData.title,
            pageData.slug,
            pageData.parent_id,
            pageData.content,
            pageData.description,
            pageData.edited_by
        ])
        const newPage = result.rows[0]

        // Handle tags if provided
        if (body.tag_ids && body.tag_ids.length > 0) {
            const tagQuery = await loadSQL('page_tags/addTagToPage.sql')
            for (const tagId of body.tag_ids) {
                await run(tagQuery, [newPage.id, tagId])
            }
        }

        res.status(201).send(newPage)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to create page' })
    }
}