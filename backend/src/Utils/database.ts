import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://oggy0503:Hairtai77@oggydb.iam63vb.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(MONGODB_URI)
        console.log('connect');
    } catch (error:unknown) {
        throw new Error("Database cannot connect")
    }
}

export {connectDatabase}