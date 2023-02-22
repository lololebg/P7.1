import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const currentRoute = window.location.pathname;

    return (
     <nav className='NavBar'>
        <ul className='Nav'>
        <li className={currentRoute === '/*' ? 'Nav_item_active' : 'Nav_item'}>
            <Link  to='/Kasa/'>
                Accueil
            </Link>
            </li>
            <li className={currentRoute === '/about' ? 'Nav_item_active' : 'Nav_item'}>
            <Link  to='/about'>
                A propos
            </Link>
                </li>
            </ul>
        </nav>
    )
    }
