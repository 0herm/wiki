import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Highlight, themes } from 'prism-react-renderer'

const Code = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : ''
    const code = String(children).replace(/\n$/, '')

    if (!inline && language) {
        return (
            <Highlight theme={themes.vsDark} code={code} language={language}>
                {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className='bg-login-900 rounded-md overflow-x-auto'>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        )
    }

    if (!inline) {
        return (
            <code className={`${className} block bg-login-900 p-1 rounded-md overflow-x-auto`} {...props}>
                {children}
            </code>
        )
    }

    return (
        <code className={`${className} bg-login-800 px-1 py-0.5 rounded text-login-100`} {...props}>
            {children}
        </code>
    )
}

export default function MarkdownRender({ content }: { content: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code: Code,
                pre: ({ children }) => <span>{children}</span>,
            }}
        >
            {content}
        </ReactMarkdown>
    )
}