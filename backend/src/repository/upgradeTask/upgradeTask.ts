import { ObjectId } from "bson";
import { mongoClient } from "../../database/mongodb";
import { Tarefa } from "../../models/tarefasModels";
import { IUpgradeTaskRepository } from "../impl/protocols";
import { IUpgradeTaskParams } from "./implTaskParamsUp";


export class mongoUpgradeTaskRepository implements IUpgradeTaskRepository{
    
    async upgradeTask(id: string ,taskparams: IUpgradeTaskParams): Promise<Tarefa> {
        
        await mongoClient.db.collection<Omit<Tarefa, "id">>("tasks")
        .updateOne({_id: new ObjectId(id)}, 
        {   $set:{
            concluido: taskparams.concluido
        }   
        });

        const task = await mongoClient.db.collection<Omit<Tarefa, "id">>("tasks")
        .findOne({_id: new ObjectId(id)});

        console.log(task)

        if(!task){
            throw new Error("Task not updated")
        }

        const {_id, ...rest} = task;

        return {id: _id.toHexString(), ...rest}

    }

}