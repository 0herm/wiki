import Navbar from '@components/navbar/navbarWrapper'
import NavItem from '@components/navbar/navbarItem'
import { cookies } from 'next/headers'

export default async function NavBar() {
    const getCookies = await cookies()
    const token = getCookies.get('access_token')?.value || null

    return (
        <Navbar
            token={token}
        >
            <NavItem href='/'>Home</NavItem>
        </Navbar>
    )
}
