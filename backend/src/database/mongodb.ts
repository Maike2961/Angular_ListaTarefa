import { MongoClient, Db } from "mongodb";

export const mongoClient = {

    client: undefined as unknown as MongoClient,
    db: undefined as unknown as Db,

    async connect(): Promise<void>{

        const url = process.env.MONGO_URL!;
        const username = process.env.MONGO_USERNAME;
        const password = process.env.MONGO_PASSWORD;

        const client = new MongoClient(url, {auth: {username, password}})

        const db = client.db("tasks")

        this.client = client;
        this.db = db;

        console.log("connected with mongo")
    }
}