import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import cors from 'cors'
const app = express()



app.use(cors());



dotenv.config();
const PORT = process.env.PORT || 4003
const URI = process.env.MongodbURI;



try{
    mongoose.connect(URI);
    console.log("connected to MongoDB");
} catch(error) {
    console.log("error: " , error);
}

//defining routes

app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})