import { OrderField } from "types/enums/order-field.enum";
import { Order } from "types/enums/order.enum";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
    getAllPlanetsController,
    createPlanetController,
    getPlanetController,
    updatePlanetController,
    deletePlanetController
} from "@controllers/planet.controller";

const getAllPlanetsHandler = async (req: Request, res: Response) => {
    try {
        const fieldQuery = req.query.field as OrderField;
        const orderQuery = req.query.order as Order;
        const pageQuery = req.query.page as string;
        const limitQuery = req.query.limit as string;

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const planets = await getAllPlanetsController(fieldQuery, orderQuery, pageQuery, limitQuery);
        res.status(200).json(planets);
    }
    catch (err) {
        res.status(500).json(`Server error ${err}`);
    }
}

const getPlanetHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const errors = validationResult(req)
    
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
    
        const planet = await getPlanetController(id);

        if (!planet) {
            res.status(404).json({ message: 'Planet not found' });
            return;
        }
    
        res.status(200).json(planet)
    }
    catch (err) {
        res.status(500).json(`Server error ${err}`);
    }
}

const createPlanetHanlder = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const planet = await createPlanetController(body);
        res.status(201).json({ message: 'created successfully' , planet })
    }
    catch (err) {
        res.status(500).json(`Server error ${err}`);
    }
}

const updatePlanetHanlder = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const id = req.params.id;

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const planet = await updatePlanetController(id, body);

        if (!planet) {
            res.status(404).json({ message: 'Planet not found' });
            return;
        }

        res.status(200).json({ message: 'updated successfully' , planet })
    }
    catch (err) {
        res.status(500).json(`Server error ${err}`);
    }
}

const deletePlanetHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const planet = await deletePlanetController(id);

        if (!planet) {
            res.status(404).json({ message: 'Planet not found' });
            return;
        }

        res.status(200).json({ message: 'deleted successfully' , planet })
    }
    catch (err) {
        res.status(500).json(`Server error ${err}`);
    }
}

export {
    getAllPlanetsHandler,
    getPlanetHandler,
    createPlanetHanlder,
    updatePlanetHanlder,
    deletePlanetHandler,
}