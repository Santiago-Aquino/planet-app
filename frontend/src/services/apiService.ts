import { IPlanetResponse } from "../types/interfaces/planet.interface";
import { IPlanetEntity, IPlanetCreate } from "../types/planet.type";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async (): Promise<IPlanetResponse> => {
  try {
    const response = await fetch(`${API_URL}planet`);
    if (!response.ok) throw new Error('Error getting planets');

    const planets = await response.json() as IPlanetResponse;    
    return planets;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchOne = async (id: string): Promise<IPlanetEntity> => {
  try {
    const response = await fetch(`${API_URL}planet/${id}`);
    if (!response.ok) throw new Error('Error getting planets');

    const planet = await response.json() as IPlanetEntity;
    return planet;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPlanet = async (newPlanet: IPlanetCreate): Promise<IPlanetEntity> => {
  try {
    const response = await fetch(`${API_URL}planet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlanet),
    });
    if (!response.ok) throw new Error('Error create planets');

    const planet = await response.json() as IPlanetEntity;
    return planet;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePlanet = async (id: string, newPlanet: IPlanetCreate): Promise<IPlanetEntity> => {
  try {
    const response = await fetch(`${API_URL}planet/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlanet),
    });
    if (!response.ok) throw new Error('Error update planets');

    const planet = await response.json() as IPlanetEntity;
    return planet;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePlanet = async (id: string): Promise<IPlanetEntity> => {
  try {
    const response = await fetch(`${API_URL}planet/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error delete planets');

    const planet = await response.json() as IPlanetEntity;
    return planet;

  } catch (error) {
    console.error(error);
    throw error;
  }
};
