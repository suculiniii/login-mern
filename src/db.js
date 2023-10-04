import mongoose, { connect } from "mongoose";

export const connectDB=async () => {
    try {
        await mongoose.connect("");
        console.log(">> DB conectada")
    } catch (error) {
        console.log(error)
    }
}