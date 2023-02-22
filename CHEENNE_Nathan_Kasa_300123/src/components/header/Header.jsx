import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='Header'>
			<h1>
				<img src={Logo} alt="kasa" />
			</h1>
			<Navbar />
		</header>
	)
}
