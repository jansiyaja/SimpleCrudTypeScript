import mongoose, { ConnectOptions } from "mongoose";

export const connectDb = async (): Promise<void> => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
          
        }as ConnectOptions)
        console.log(`MongoDB connected with ${connect.connection.host}`);
    } catch (error ) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
}

