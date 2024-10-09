import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <Link to={'/'} className="btn btn-ghost text-xl">PlanetsSW</Link>
            <Link to={'/create-planet'} className='btn btn-ghost'>Crear planeta</Link>
        </div>
    )
}

export default NavBar;