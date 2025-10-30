'use server'

import { getWrapper } from "./apiWrapper"

export async function getPage({id}: {id: number}): Promise<GetPageProps> {
    const path = `/pages/${id}`

    return getWrapper({path})
}

export async function getPageBySlug({slug}: {slug: string}): Promise<GetPageProps> {
    const path = `/pages/slug/${slug}`

    return getWrapper({path})
}