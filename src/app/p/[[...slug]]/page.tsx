
export default async function Page({ params }: { params: { slug?: string[] } }) {
    const slugParams = await params

    return (
        <p>This is a dynamic page based on the slug: {slugParams.slug?.join('/') || 'root'}</p>
    )
}