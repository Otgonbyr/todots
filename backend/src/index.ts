import express from "express";
import { connectDatabase } from "./Utils/database";
import { auth } from "../src/router/User";

const start = () => {
    const app = express()
    const PORT = 8000
    connectDatabase()
    app.get('/', (req, res) => {
        res.status(200).send({success:true, msg: "hello"})
    })
    app.listen(PORT, () => {
        console.log("server is running");
    })
}
start()