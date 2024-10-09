import { IPlanet } from "types/interfaces/planet.interface"

export type IPlanetEntity =  Omit<IPlanet, 'edited' | 'created' | 'films' | 'residents'>