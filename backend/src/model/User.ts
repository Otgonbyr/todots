import mongoose from "mongoose";

const newMongoose = new mongoose.Schema({
    username: String,
    password: String,
    avatarimg: Buffer
})
const userModel = mongoose.model("user", newMongoose )
export {userModel}