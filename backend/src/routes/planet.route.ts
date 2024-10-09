import { Router } from "express";
import { createValidator, idValidator, updateValidator, getValidator } from "../utils/validator";
import {
    getAllPlanetsHandler,
    getPlanetHandler,
    createPlanetHanlder,
    updatePlanetHanlder,
    deletePlanetHandler
} from "../handlers/planet.handler";

const router = Router();

router.get('/', getValidator, getAllPlanetsHandler);

router.get('/:id', idValidator, getPlanetHandler);

router.post('/', createValidator, createPlanetHanlder);

router.patch('/:id', updateValidator, updatePlanetHanlder);

router.delete('/:id', idValidator, deletePlanetHandler);

export default router;