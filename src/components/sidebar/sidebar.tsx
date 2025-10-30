'use client'

import { useState, useEffect } from 'react'
import { File, FilePlus2, Folder, ArrowLeft } from 'lucide-react'
import { getCookie } from 'uibee/utils'
import config from '@config'
import { useRouter } from 'next/navigation'


async function getPages(parentId: string | null) {
    const query = parentId ? `?parent_id=${parentId}` : ''
    const path = `/pages${query}`

    const access_token = getCookie('access_token') || ''

    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
    }

    const defaultOptions = { method: 'GET', headers: baseHeaders }
    const finalOptions = { ...defaultOptions }

    try {
        const response = await fetch(`${config.url.API_URL}${path}`, finalOptions)
        if (!response.ok) {
            throw new Error(await response.text())
        }

        const text = await response.text()
        return JSON.parse(text)
        // eslint-disable-next-line
    } catch (error: any) {
        return (
            JSON.stringify(error.error) ||
            JSON.stringify(error.message) ||
            'Unknown error! Please contact TekKom'
        )
    }
}

export default function SideBar() {
    const [pages, setPages] = useState([])
    const [currentParentId, setCurrentParentId] = useState<string | null>(null)
    const [parentStack, setParentStack] = useState<Array<{id: string | null, title: string}>>([{id: null, title: 'Home'}])
    const router = useRouter()

    useEffect(() => {
        getPages(currentParentId).then((data) => {
            if (typeof data === 'string') {
                setPages([])
            } else {
                setPages(data)
            }
        })
    }, [currentParentId])

    return (
        <div className='w-2xs p-2 h-fit sticky top-20'>
            <button className='flex flex-row gap-1 cursor-pointer bg-login-500 rounded-sm px-3.5 py-1.5'>
                <FilePlus2 className='p-1' />
                New Page
            </button>
            <div className='mt-4 flex flex-wrap gap-1 text-sm'>
                {parentStack.map((item, index) => (
                    <span key={index} className='flex items-center'>
                        <button
                            className='cursor-pointer hover:underline'
                            onClick={() => {
                                setParentStack(parentStack.slice(0, index + 1))
                                setCurrentParentId(item.id)
                            }}
                        >
                            {item.title}
                        </button>
                        {index < parentStack.length - 1 && <span className='mx-1'>›</span>}
                    </span>
                ))}
            </div>
            <div className='mt-4'>
                {pages.map((page: any) => (
                    <button 
                        key={page.id}
                        className='flex gap-2 py-2 cursor-pointer'
                        onClick={
                            () => {
                                if (page.has_children) {
                                    setParentStack([...parentStack, {id: page.id, title: page.title}])
                                    setCurrentParentId(page.id)
                                } else {
                                    router.push(`/p/${page.slug}`)
                                }
                            }
                        }
                    >
                        {page.has_children ? 
                                <Folder />
                            :
                                <File />
                        }
                        {page.title}
                    </button>
                ))}
            </div>
        </div>
    )
}