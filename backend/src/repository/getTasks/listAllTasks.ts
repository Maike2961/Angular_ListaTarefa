import { mongoClient } from "../../database/mongodb";
import { Tarefa } from "../../models/tarefasModels";
import { IGetAllTaskRepository } from "../impl/protocols";

export class MongoListAllTasksRepository implements IGetAllTaskRepository{
    
    async listAllTasks(): Promise<Tarefa[]> {
        const tasks = await mongoClient.db.collection<Omit<Tarefa, "id">>("tasks").find({}).toArray()
        
        return tasks.map(({_id, ...rest}) => ({
            ...rest,
            id: _id.toHexString()
        }));
    }
    
}