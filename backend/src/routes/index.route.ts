import { Router } from "express";
import planetRouter from '@routes/planet.route'

export const router = Router()
    .use('/planet', planetRouter);