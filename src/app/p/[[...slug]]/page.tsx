import MarkdownRender from "@components/markdown/markdown"
import { getPageBySlug } from "@utils/api"

export default async function Page({ params }: { params: { slug?: string[] } }) {
    const slugParams = await params

    const page = await getPageBySlug(slugParams.slug?.join('/') || 'root')

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 py-8">
                <article className="prose prose-login max-w-none">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            {page.title}
                        </h1>
                        {page.description && (
                            <p className="text-lg text-muted-foreground">
                                {page.description}
                            </p>
                        )}
                    </header>
                    <div className="prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:border">
                        <MarkdownRender content={page.content} />
                    </div>
                </article>
            </div>
        </div>
    )
}