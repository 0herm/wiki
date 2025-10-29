export {}

declare global {
    type SQLParamType = string | number | boolean | null | Date

    interface Page {
        id: number
        title: string
        slug: string
        parent_id: number | null
        content: string | null
        description: string | null
        edited_by: string
        created_at: Date
        updated_at: Date
    }

    interface PageVersion {
        id: number
        page_id: number
        version_number: number
        content_diff: string
        edited_by: string
        created_at: Date
    }

    interface Tag {
        id: number
        name: string
        color: string | null
        created_at: Date
    }

    interface PageTag {
        page_id: number
        tag_id: number
    }

    interface WikiComment {
        id: number
        page_id: number
        created_by: string
        content: string
        created_at: Date
        updated_at: Date
    }
}
