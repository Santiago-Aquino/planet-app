import { IPlanetEntity } from "../planet.type";

export interface IPlanet {
    _id: string
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    url: string;
    residents: string[];
    created: Date;
    edited: Date;
    films: string[];
}

export interface IPlanetResponse {
    hasNextPage: boolean,
    hasPrevPage: boolean,
    nextPage: number | null,
    prevPage: number | null,
    totalPages: number
    planets: IPlanetEntity[];
}