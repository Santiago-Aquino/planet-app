import mongoose, { PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IPlanetEntity } from '../../types/planet.type';

const Schema = mongoose.Schema;

const planetSchema = new Schema<IPlanetEntity>(
    {
        name: {
            type: String,
            required: true,
        },
        rotation_period: {
            type: String,
            required: true,
        },
        orbital_period: {
            type: String,
            required: true,
        },
        diameter: {
            type: String,
            required: true,
        },
        climate: {
            type: String,
            required: true,
        },
        gravity: {
            type: String,
            required: true,
        },
        terrain: {
            type: String,
            required: true,
        },
        surface_water: {
            type: String,
            required: true,
        },
        population: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

planetSchema.plugin(mongoosePaginate);
export default mongoose.model<IPlanetEntity, PaginateModel<IPlanetEntity>>('planets', planetSchema);