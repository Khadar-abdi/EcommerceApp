import mongoose from "mongoose";


const ConnectDB = async() => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`connected to the database ${conn.connection.host}`);

    } catch (error) {
        console.error(error.message)
    };
}



export default ConnectDB;