import  express from "express";
import cors from 'cors';
import { config } from "dotenv"
import { mongoClient } from "./database/mongodb";
import {taskRouters} from "./router/taskRouter"

config();

const app = express();

app.use(express.json())
app.use(cors())

app.use("/task", taskRouters())


app.listen(process.env.PORT, async () => {
    await mongoClient.connect()
    console.log(`Server listening on the port ${process.env.PORT}`)
});