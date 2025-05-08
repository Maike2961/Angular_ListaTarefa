import { mongoClient } from "../../database/mongodb";
import { Tarefa } from "../../models/tarefasModels";
import { ICreateTaskRepository } from "../impl/protocols";
import { ICreateTaskParams } from "./implTaskParams";


export class MongoCreateTaskRepository implements ICreateTaskRepository{
    
    async createTask(taskparams: ICreateTaskParams): Promise<Tarefa> {
        
        const {insertedId} = await mongoClient.db.collection("tasks").insertOne(taskparams);

        const task = await mongoClient.db.collection<Omit<Tarefa, "id">>("tasks")
        .findOne({_id: insertedId})

        if(!task){
            throw new Error("User not created")
        }

        const {_id, ...rest } = task;

        return {id: _id.toHexString(), ...rest}
    }

}