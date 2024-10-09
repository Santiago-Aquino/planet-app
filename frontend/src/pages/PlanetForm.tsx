import React, { useState } from 'react';
import { IPlanetCreate } from '../types/planet.type';
import { createPlanet } from '../services/apiService';


const PlanetForm = () => {
  const [planet, setPlanet] = useState<IPlanetCreate>({
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanet({
      ...planet,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await createPlanet(planet);
  };

  return (
    <div className='h-screen flex justify-center items-center mt-24'>
        <div className="container w-2/4 p-8">
        <form onSubmit={handleSubmit} className="bg-primary-content p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Cree un nuevo planeta</h1>
            <div className="grid grid-cols-1 gap-6">
            <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input
                type="text"
                name="name"
                value={planet.name}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Periodo rotación</label>
                <input
                type="text"
                name="rotation_period"
                value={planet.rotation_period}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Periodo orbital</label>
                <input
                type="text"
                name="orbital_period"
                value={planet.orbital_period}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Diámetro</label>
                <input
                type="text"
                name="diameter"
                value={planet.diameter}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Clima</label>
                <input
                type="text"
                name="climate"
                value={planet.climate}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Gravedad</label>
                <input
                type="text"
                name="gravity"
                value={planet.gravity}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Terreno</label>
                <input
                type="text"
                name="terrain"
                value={planet.terrain}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Agua superficial</label>
                <input
                type="text"
                name="surface_water"
                value={planet.surface_water}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Población</label>
                <input
                type="text"
                name="population"
                value={planet.population}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">URL</label>
                <input
                type="text"
                name="url"
                value={planet.url}
                onChange={handleChange}
                className="input input-bordered !text-black !bg-white w-full"
                required
                />
            </div>

            <div className="mt-6">
                <button type="submit" className="btn btn-primary w-full">
                Enviar
                </button>
            </div>
            </div>
        </form>
        </div>
    </div>
  );
};

export default PlanetForm;
