import { ObjectId } from "bson";
import { mongoClient } from "../../database/mongodb";
import { Tarefa } from "../../models/tarefasModels";
import { IDeleteTaskRepository } from "../impl/protocols";
import { IDeleteTaskParams } from "./implTaskParamDel";

export class mongoDeleteTaskRepository implements IDeleteTaskRepository{
    
    async deleteTask(taskparams: IDeleteTaskParams): Promise<Tarefa> {

        console.log(taskparams.id)
        
        const taskID = await mongoClient.db
        .collection<Omit<Tarefa, "id">>("tasks")
        .findOne({_id: new ObjectId(taskparams.id)})

        
        if(!taskID){
            throw new Error("error task not found")
        }

        const task = await mongoClient.db
        .collection("tasks")
        .deleteOne({_id: new ObjectId(taskparams.id)})

        if(!task){
            throw new Error("error task wasnt deleted")
        }

        const {_id, ...rest} = taskID

        return {id: _id.toHexString(), ...rest}
        
    }

}
