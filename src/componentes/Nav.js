import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='navbar justify-content-center'>
            <ul className='row '>
                <li className='col list-group-item'>
                    <Link to='/' className='btn-principal'>
                        <img src='/images/nav-Icons/home.png' alt="Home" className="navbar-brand" />
                    </Link>
                </li>
                <li className='col list-group-item'>
                    <Link to='/juego' className='btn-principal'>
                        <img src='/images/nav-Icons/juego.png' alt="Juego" className="navbar-brand" />
                    </Link>
                </li>
                <li className='col list-group-item'>
                    <Link to='/desarrolladores' className='btn-principal'>
                        <img src='/images/nav-Icons/desarrolladores.png' alt="Desarrolladores" className="navbar-brand" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
