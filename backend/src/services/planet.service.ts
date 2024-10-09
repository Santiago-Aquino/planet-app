import { IPlanetResponse } from "../types/interfaces/planet.interface";
import config from '../config/global-vars'
import PlanetService from "../dao/services/mongo/planet.service";
import { IPlanetEntity } from "../types/planet.type";

export class ApiService {
  private baseURL: string;
  private planetService: PlanetService;

  constructor() {
    this.baseURL = config.externalApi || '';
    this.planetService = new PlanetService();
  }

  async getPlanetsMapped(): Promise<IPlanetEntity[]> {
    try {
      const planetResponse = await this.getPlanets();

      const planets = planetResponse.results.map((planet): IPlanetEntity => {
        const { created, edited, residents, films, ...rest } = planet;

        return rest;
      });

      return planets;
    } catch (error) {
      console.error('Error fetching planets:', error);
      throw error;
    }
  }

  async getPlanets(): Promise<IPlanetResponse> {
    try {
      const response = await fetch(`${this.baseURL}/planets`);
      const planetResponse: IPlanetResponse = await response.json() as IPlanetResponse;

      return planetResponse;
    } catch (error) {
      console.error('Error fetching planets:', error);
      throw error;
    }
  }

  async saveData(): Promise<string> {
    try {
      const planets = await this.getPlanetsMapped();

      planets.forEach(async (planet) => {
        await this.planetService.create(planet);
      });

      return 'Data saved successfully';
    } catch (error) {
      console.error('Error save data:', error);
      throw error;
    }
  }
}
