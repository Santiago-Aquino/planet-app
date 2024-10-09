import PlanetService from "@dao/services/mongo/planet.service";
import { OrderField } from "types/enums/order-field.enum";
import { Order } from "types/enums/order.enum";
import { IPlanetEntity } from "types/planet.type";


const planetService = new PlanetService();

const getAllPlanetsController = async (fieldQuery: OrderField, orderQuery: Order, pageQuery: string, limitQuery: string) => {
    const page = pageQuery ? Number(pageQuery) : 1;
    const limit = limitQuery ? Number(limitQuery) : 4;

    const planets = await planetService.getAll(fieldQuery, orderQuery, page, limit);
    return planets;
}

const getPlanetController = async (id: string) => {
    const planet = await planetService.getOne(id);
    return planet;
}

const createPlanetController = async (newPlanet: IPlanetEntity) => {
    const planet = await planetService.create(newPlanet);
    return planet;
}

const updatePlanetController = async (id: string, newFields: IPlanetEntity) => {
    const planet = await planetService.update(id, newFields);
    return planet;
}

const deletePlanetController = async (id: string) => {
    const planet = await planetService.delete(id);
    return planet;
}

export {
    getAllPlanetsController,
    getPlanetController,
    createPlanetController,
    updatePlanetController,
    deletePlanetController,
}