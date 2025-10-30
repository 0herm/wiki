export declare global {
    type PageProps = {
        title: string
        slug: string
        parent_id: number | null
        content: string
        description: string
        edited_by: string
    }

    type GetPageProps = PageProps & {
        id: number
        has_children: boolean
        created_at: string
        updated_at: string
    }

    type GetPagesProps = {
        id: number
        title: string
        parent_id: number | null
        slug: string
        has_children: boolean
    }[]
}