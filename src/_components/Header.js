// Nextjs modules
import Link from 'next/link'
import Image from 'next/image'

// Images
import logo from "../../public/no_bg_dark@3x.png"

// Componenents
export function Header({children}){
    return (
    <header>
        {children}
    </header>
    )
}

export function HeaderNav(){
    return (
    <>
    <nav className='headerNav'>
        <ul>
            <li><Link href="/">home</Link></li>
            <li><Link href="/contact">contact</Link></li>
            <li><Link href="/blog">blog</Link></li>
        </ul>
    </nav>
    </>
    )
}

export function HeaderLogo(){
    return (
        <>
        <Image
        className='headerLogo'
        src={logo} 
        alt="Company Logo"
        />
        </>
    )
}

export function HeaderAuth({notLoggedIn}){
    // let notLoggedIn = true
    return (
        <>
        <nav>
            <Link href="/store">store</Link>
            <ul>
            { notLoggedIn ? 
            <li><Link href="/login">login</Link></li>
            : 
            <li><Link href='profile'>user.name</Link></li>
            }
            <li><Link href="cart">cart</Link></li>
            </ul>
        </nav>
        </>
    )
}