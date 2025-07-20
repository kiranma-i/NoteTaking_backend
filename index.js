import cors from "cors";
import express from "express";
import connectToMongoDB from "./db/db.js";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/note.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter);
app.listen(5000, () => {
    connectToMongoDB();
    console.log("server.js is running now");
})

// import mongoose from "mongoose";

// export const connectToDatabase = async() => {
//     try {
//         mongoose.connect('mongodb+srv://babunkundu60:0EEN18UaPa93Fk91@stminorg27.plp450e.mongodb.net/?retryWrites=true&w=majority&appName=stminorg27').then(() => {
//             console.log("Connected to MongoDB");
//         })
//     } catch (err) {
//         console.error("Error connecting to the database:", err);
//         throw err;
//     }
// }