import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        
        const {connection} = await mongoose.connect(process.env.MONGODB_URL)
        
        if(connection.readyState == 2){
            console.log("connection keep going");
            return Promise.resolve(true)
        }
        if(connection.readyState == 1){
            console.log("connection succesful");
            return Promise.resolve(true)
        }

    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo