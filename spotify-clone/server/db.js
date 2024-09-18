import mongoose from "mongoose";

export default async function connectDb(){
    mongoose.connect("mongodb+srv://dpsanz:carokann@313sanz313.4lnt5.mongodb.net/Spotify?retryWrites=true&w=majority&appName=sanz313")

    return mongoose.connect
}