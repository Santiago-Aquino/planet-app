import { Router } from "express";
import planetRouter from './planet.route'

export const router = Router()
    .use('/planet', planetRouter);