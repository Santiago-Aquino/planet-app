import { body, param, query } from 'express-validator';

export const idValidator = [
    param('id', 'param id is null').notEmpty().isMongoId(),
];

export const createValidator = [
    body('name').notEmpty().isString(),
    body('rotation_period').notEmpty().isString(),
    body('orbital_period').notEmpty().isString(),
    body('diameter').notEmpty().isString(),
    body('climate').notEmpty().isString(),
    body('gravity').notEmpty().isString(),
    body('terrain').notEmpty().isString(),
    body('surface_water').notEmpty().isString(),
    body('population').notEmpty().isString(),
    body('url').notEmpty().isString().isURL(),
];

export const updateValidator = [
    body('name').optional().isString(),
    body('rotation_period').optional().isString(),
    body('orbital_period').optional().isString(),
    body('diameter').optional().isString(),
    body('climate').optional().isString(),
    body('gravity').optional().isString(),
    body('terrain').optional().isString(),
    body('surface_water').optional().isString(),
    body('population').optional().isString(),
    body('url').optional().isString().isURL(),
    ...idValidator,
];

export const getValidator = [
    query('field').optional().isString(),
    query('order').optional().isString(),
    query('page').optional().isInt(),
    query('limit').optional().isInt(),
]