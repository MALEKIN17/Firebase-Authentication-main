import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className="bg-blue-500 p-4">
            <nav className="flex justify-between">
                <div>
                    <NavLink to="/" className="text-white text-lg">Nemesis</NavLink>
                </div>
                <div>
                    <NavLink to="/login" className="text-white">Iniciar sesión</NavLink>
                </div>
            </nav>
        </div>
    )
}