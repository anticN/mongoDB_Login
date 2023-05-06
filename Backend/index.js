import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;

// mongodb connection
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbLogin = "MongoLogin";

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    client.connect();
    console.log(`Connected to MongoDB`)
})

