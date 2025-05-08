import { HttpResponse, IController } from "../repository/impl/interfaceBasic";
import { Tarefa } from "../models/tarefasModels";
import { IGetAllTaskRepository } from "../repository/impl/protocols";

export class listTaskController implements IController{

    listTaskRepository: IGetAllTaskRepository;

    constructor(listTaskRepository: IGetAllTaskRepository){
        this.listTaskRepository = listTaskRepository;
    }
    
    async handle(): Promise<HttpResponse<Tarefa[] | string>> {
        try{
            const tasks = await this.listTaskRepository.listAllTasks()
            return{
                statusCode: 200,
                body: tasks
            }
        }catch(e){
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    
    }

}