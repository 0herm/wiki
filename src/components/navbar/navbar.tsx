import { Navbar, NavItem } from 'uibee/components'
import { cookies } from 'next/headers'

export default async function NavBar() {
    const getCookies = await cookies()
    const token = getCookies.get('access_token')?.value || null

    return (
        <Navbar
            token={token}
            theme='dark'
            disableThemeToggle
            lang='en'
            disableLanguageToggle
        >
            <NavItem href='/'>Home</NavItem>
        </Navbar>
    )
}
