import { IPlanet } from "./interfaces/planet.interface"

export type IPlanetEntity =  Omit<IPlanet, 'edited' | 'created' | 'films' | 'residents'>