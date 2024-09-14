import mongoose from "mongoose";
import 'dotenv/config'

const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo.fthxj.mongodb.net/?retryWrites=true&w=majority&appName=Demo`
mongoose.connect(url)
export default mongoose
