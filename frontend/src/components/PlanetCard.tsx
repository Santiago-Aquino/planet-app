import { IPlanetEntity } from "../types/planet.type"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { MouseEvent } from "react"
import { deletePlanet } from "../services/apiService"

interface Props {
    planet: IPlanetEntity,
}

function PlanetCard({ planet }: Props) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;


    const goToPlanet = (id: string) => {
        navigate(`/planet/${id}`);
    }

    const handleDelete = async (e: MouseEvent ,id: string) => {
        e.stopPropagation();
        e.preventDefault();

        await deletePlanet(id);
        navigate('/');
    }

    return (
        <div className={`card bg-base-100 w-96 shadow-xl ${pathname === '/' ? 'cursor-pointer' : ''}`} onClick={() => goToPlanet(planet._id)}>
            <div className="card-body">
                <h2 className="card-title">{planet.name}</h2>
                <p>{planet.climate}</p>
                <p>{planet.diameter}</p>
                <p className="w-[200px] line-clamp-1">{planet.gravity}</p>
                <p>{planet.orbital_period}</p>
                <p>{planet.population}</p>
                <p>{planet.rotation_period}</p>
                <p>{planet.surface_water}</p>
                <p className="w-[200px] line-clamp-1">{planet.terrain}</p>
                <p>{planet.url}</p>
                <div className="card-actions justify-end">
                {
                    pathname !== '/' && (
                        <>
                            <Link to={`/update-planet/${planet._id}`} onClick={(e) => e.stopPropagation()}>
                                <button className="btn btn-primary">Editar</button>
                            </Link>
                            <button className="btn btn-error" onClick={(e) => handleDelete(e, planet._id)}>Eliminar</button>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;