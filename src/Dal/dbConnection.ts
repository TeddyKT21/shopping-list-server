import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config();

export const connetToDB = () =>{
    mongoose.connect(process.env.CONNECTION_STRING!);
}