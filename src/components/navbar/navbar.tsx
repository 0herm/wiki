import { Navbar, NavItem } from 'uibee/components'
import { getCookie } from 'uibee/utils'

export default function NavBar() {
    const token = getCookie('access_token')

    return (
        <Navbar
            token={token}
            theme='dark'
            disableThemeToggle
            lang='en'
            disableLanguageToggle
        >
            <NavItem href='/'>Home</NavItem>
            <NavItem href='https://login.no' external>Login</NavItem>
        </Navbar>
    )
}
