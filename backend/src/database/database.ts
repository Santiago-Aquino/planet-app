import mongoose from "mongoose";
import config from '@config/global-vars'

const mongoUrl = config.mongoUrl || '';

export const connectDB = async (): Promise<boolean> => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('DB is connected');
        return true;
    } catch (err) {
        console.log(err)
        return false;
    }
}