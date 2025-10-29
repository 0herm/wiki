import getIndex from './handlers/index/getIndex.ts'
import getPages from './handlers/pages/getPages.ts'
import getPage from './handlers/pages/getPage.ts'
import createPage from './handlers/pages/createPage.ts'
import updatePage from './handlers/pages/updatePage.ts'
import deletePage from './handlers/pages/deletePage.ts'
import getTags from './handlers/tags/getTags.ts'
import getTag from './handlers/tags/getTag.ts'
import createTag from './handlers/tags/createTag.ts'
import updateTag from './handlers/tags/updateTag.ts'
import deleteTag from './handlers/tags/deleteTag.ts'
import getComments from './handlers/comments/getComments.ts'
import createComment from './handlers/comments/createComment.ts'
import updateComment from './handlers/comments/updateComment.ts'
import deleteComment from './handlers/comments/deleteComment.ts'
import getPageTags from './handlers/page_tags/getPageTags.ts'
import addTagToPage from './handlers/page_tags/addTagToPage.ts'
import removeTagFromPage from './handlers/page_tags/removeTagFromPage.ts'
import getPageVersions from './handlers/page_versions/getPageVersions.ts'
import createPageVersion from './handlers/page_versions/createPageVersion.ts'
import type { FastifyInstance } from 'fastify'

export default async function apiRoutes(fastify: FastifyInstance) {
    // index
    fastify.get('/', getIndex)

    // pages
    fastify.get('/pages', getPages)
    fastify.get('/pages/:id', getPage)
    fastify.get('/pages/slug/:slug', getPage)
    fastify.post('/pages', createPage)
    fastify.put('/pages/:id', updatePage)
    fastify.delete('/pages/:id', deletePage)

    // tags
    fastify.get('/tags', getTags)
    fastify.get('/tags/:id', getTag)
    fastify.post('/tags', createTag)
    fastify.put('/tags/:id', updateTag)
    fastify.delete('/tags/:id', deleteTag)

    // comments
    fastify.get('/comments/:pageId', getComments)
    fastify.post('/comments', createComment)
    fastify.put('/comments/:id', updateComment)
    fastify.delete('/comments/:id', deleteComment)

    // page tags
    fastify.get('/pages/:pageId/tags', getPageTags)
    fastify.post('/page-tags', addTagToPage)
    fastify.delete('/page-tags/:pageId/:tagId', removeTagFromPage)

    // page versions
    fastify.get('/pages/:pageId/versions', getPageVersions)
    fastify.post('/page-versions', createPageVersion)
}
