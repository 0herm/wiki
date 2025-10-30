import MarkdownRender from '@components/markdown/markdown'
import { getPageBySlug } from '@utils/api'

export default async function Page({ params }: { params: { slug?: string[] } }) {
    const slugParams = await params

    const page = await getPageBySlug(slugParams.slug?.join('/') || 'root')

    return (
        <div className='min-h-screen bg-background'>
            <div className='px-4 pt-8'>
                <article className='w-full'>
                    <header>
                        <h1 className='text-4xl font-bold pb-1'>
                            {page.title}
                        </h1>
                        {page.description && (
                            <p className='text-lg text-login-75'>
                                {page.description}
                            </p>
                        )}
                        <p className='text-sm text-login-100 py-1'>
                            Last edited by <span className='font-semibold'>{page.edited_by}</span> on  {
                                new Date(page.updated_at).toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' })
                            }
                        </p>
                    </header>
                    <hr className='mt-4 mb-8' />
                    <div className='max-w-none prose prose-login'>
                        <MarkdownRender content={page.content} />
                    </div>
                </article>
            </div>
        </div>
    )
}