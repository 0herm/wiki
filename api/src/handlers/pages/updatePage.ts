import type { FastifyReply, FastifyRequest } from 'fastify'
import run from '#db'
import { loadSQL } from '#utils/sql.ts'

interface UpdatePageParams {
    id: string
}

interface UpdatePageBody {
    title: string
    slug: string
    parent_id: number | null
    content: string | null
    description: string | null
    edited_by: string
    tag_ids?: number[]
}

export default async function updatePageHandler(
    req: FastifyRequest<{ Params: UpdatePageParams; Body: UpdatePageBody }>,
    res: FastifyReply
) {
    try {
        const { id } = req.params
        const updates = req.body
        // Update the page with provided data
        const updateQuery = await loadSQL('pages/updatePage.sql')
        const updateResult = await run(updateQuery, [
            parseInt(id),
            updates.title,
            updates.slug,
            updates.parent_id,
            updates.content,
            updates.description,
            updates.edited_by
        ])
        const updatedPage = updateResult.rows[0]
        if (!updatedPage) {
            return res.status(404).send({ error: 'Page not found' })
        }

        // Handle tags if provided
        if (updates.tag_ids !== undefined) {
            // Remove all existing tags
            const removeTagsQuery = await loadSQL('page_tags/removeAllTagsFromPage.sql')
            await run(removeTagsQuery, [parseInt(id)])

            // Add new tags
            if (updates.tag_ids.length > 0) {
                const addTagQuery = await loadSQL('page_tags/addTagToPage.sql')
                for (const tagId of updates.tag_ids) {
                    await run(addTagQuery, [parseInt(id), tagId])
                }
            }
        }

        res.send(updatedPage)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to update page' })
    }
}