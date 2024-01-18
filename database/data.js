import mongoose from "mongoose";
// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const DBConnection = async () => {
    // Ensure that the mongoose module is imported
    try {
        // Access the MONGO_URI from the environment variables
        const DB_URL = process.env.MONGO_URI;

        

        console.log('Db Connected');

        // Use default connection options for Mongoose
        await mongoose.connect(DB_URL, {  });
    } catch (error) {
        console.error('Error while connecting to db', error.message);
    }
};

export default DBConnection;
