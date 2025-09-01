import {Link} from 'react-router-dom'
import Logo from '../assets/Carro.png'

const Nav = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="logo" className="h-10 w-auto"/>
        <ul className="flex space-x-4">
          <li className="list-none">
            <Link to="/" className="hover:text-yellow-400 transition-colors duration-300 " >Home</Link>
          </li>

          <li className="list-none">
            <Link to="/cliente" className="hover:text-yellow-400 transition-colors duration-300">Cliente</Link>
          </li>

        </ul>
      </nav>
    </header>

  )
}

export default Nav