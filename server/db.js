import mongoose from "mongoose";
export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://daniel:senhazica@sanz313.4lnt5.mongodb.net/`);

    return mongoose.connection;
}