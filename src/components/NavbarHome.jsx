import { NavLink } from "react-router-dom";
export default function NavbarHome() {
  return (
    <div className="bg-blue-500 p-4">
      <nav className="flex justify-between">
        <div>
          <NavLink to="/menu" className="text-white">
            menu
          </NavLink>
        </div>
        <div>
          <NavLink to="/nosotros" className="text-white text-lg">
            Nosotros
          </NavLink>
        </div>
        <div>
          <NavLink to="/producto" className="text-white">
            Producto
          </NavLink>
        </div>
        <div>
          <NavLink to="/informacion" className="text-white text-lg">
            Informacion
          </NavLink>
        </div>
        <div>
          <NavLink to="/perfil" className="text-white">
            Perfil
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
